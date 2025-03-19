const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Import User model
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3002;

// Check for required environment variables
if (!process.env.JWT_SECRET) {
  console.error('WARNING: JWT_SECRET is not set in environment variables. Using a random value for this session only.');
  console.error('This is insecure for production. Please set JWT_SECRET in your .env file.');
}

if (!process.env.SESSION_SECRET) {
  console.error('WARNING: SESSION_SECRET is not set in environment variables. Using JWT_SECRET as fallback.');
  console.error('This is insecure for production. Please set SESSION_SECRET in your .env file.');
}

if (!process.env.MONGO_URI) {
  console.error('ERROR: MONGO_URI is not set in environment variables.');
  console.error('MongoDB connection will fail. Please set MONGO_URI in your .env file.');
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.error('WARNING: Google OAuth credentials are not set in environment variables.');
  console.error('Google authentication will not work properly. Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file.');
}

const JWT_SECRET = process.env.JWT_SECRET || require('crypto').randomBytes(32).toString('hex');
const SESSION_SECRET = process.env.SESSION_SECRET || JWT_SECRET;

// Hardcode the callback URL to ensure exact match
const GOOGLE_CALLBACK_URL = "https://docuaidfront-production.up.railway.app/auth/google/callback";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// CORS Configuration - Allow all localhost ports with more flexibility
app.use(cors({
  origin: [
    'https://www.docuaid.online',
    'https://docuaid.online',
    'http://localhost:5173',
    'https://docuaidfront-production.up.railway.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight requests
app.options('*', cors());

app.use(bodyParser.json());
app.use(cookieParser());

// Add session middleware
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Configure Google Strategy using existing env variables
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
  },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Find or create user in database
        console.log('Google profile:', profile.displayName, profile.emails[0].value);

        let user = await User.findOne({
          $or: [
            { email: profile.emails[0].value },
            { googleId: profile.id }
          ]
        });

        if (!user) {
          // Create a new user with Google profile data
          const randomPassword = Math.random().toString(36).slice(-8);
          const hashedPassword = await bcrypt.hash(randomPassword, 10);

          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            password: hashedPassword,
            profilePicture: profile.photos && profile.photos[0] ? profile.photos[0].value : ''
          });

          await user.save();
          console.log('New Google user created:', user.email);
        } else if (!user.googleId) {
          // If user exists but doesn't have googleId, update it
          user.googleId = profile.id;
          if (profile.photos && profile.photos[0] && !user.profilePicture) {
            user.profilePicture = profile.photos[0].value;
          }
          await user.save();
          console.log('Updated existing user with Google ID:', user.email);
        } else {
          console.log('Existing user found with Google email:', user.email);
        }

        return done(null, user);
      } catch (error) {
        console.error('Google authentication error:', error);
        return done(error, null);
      }
    }));
} else {
  console.error('Google Strategy not configured due to missing credentials');
}

// Simple ping endpoint for connectivity testing
app.get('/ping', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is reachable', timestamp: new Date().toISOString() });
});

// Connect to MongoDB
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.error('MongoDB connection skipped due to missing MONGO_URI');
}

// User registration route
app.post('/register', async (req, res) => {
  try {
    console.log('Register request received:', req.body);
    const { name, email, password } = req.body;

    // Input validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Save user
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    console.log('User registered successfully:', email);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body.email);
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    // Send response with user data (excluding password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    console.log('User logged in successfully:', email);
    res.status(200).json({
      message: 'Login successful',
      user: userData,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend server is running properly' });
});

// Replace the placeholder Google auth with real implementation
// Google authentication routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('Google auth callback successful');

    // Create JWT token for authenticated user
    const token = jwt.sign(
      { userId: req.user._id, email: req.user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    // Prepare user data for frontend
    const userData = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    };

    // Use hardcoded frontend URL for production or fallback to environment variable
    let frontendUrl = 'https://www.docuaid.online';

    // Use environment variable if available and not in production
    if (process.env.FRONTEND_URL && process.env.NODE_ENV !== 'production') {
      frontendUrl = process.env.FRONTEND_URL;
    }

    // Construct the redirect URL
    const redirectUrl = `${frontendUrl}/login?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`;

    console.log('Google Auth - Redirecting to:', redirectUrl);

    // Redirect to the frontend with token and user data
    res.redirect(redirectUrl);
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});