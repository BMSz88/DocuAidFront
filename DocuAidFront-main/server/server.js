const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Change this in production

// CORS Configuration - Allow all localhost ports with more flexibility
app.use(cors({
  origin: function (origin, callback) {
    // Allow any origin that is localhost or undefined (like Postman requests)
    if (!origin || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Add session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true in production with HTTPS
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
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:3001/auth/google/callback"
},
  async function (accessToken, refreshToken, profile, done) {
    try {
      // Find or create user in database
      console.log('Google profile:', profile.displayName, profile.emails[0].value);

      let user = await User.findOne({ email: profile.emails[0].value });

      if (!user) {
        // Create a new user with Google profile data
        const randomPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(randomPassword, 10);

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: hashedPassword
        });

        await user.save();
        console.log('New Google user created:', user.email);
      } else {
        console.log('Existing user found with Google email:', user.email);
      }

      return done(null, user);
    } catch (error) {
      console.error('Google authentication error:', error);
      return done(error, null);
    }
  }
));

// Simple ping endpoint for connectivity testing
app.get('/ping', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is reachable', timestamp: new Date().toISOString() });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Register endpoint
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

    console.log('User registered successfully:', email);
    res.status(201).json({ message: 'User registered successfully' });
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

    // Send response with user data (excluding password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    console.log('User logged in successfully:', email);
    res.status(200).json({
      message: 'Login successful',
      token,
      user: userData
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

    // Prepare user data for frontend
    const userData = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    };

    // Get the origin from the request or use a default
    let origin = req.headers.origin;

    if (!origin && req.headers.referer) {
      // Extract origin from referer if available
      const refererUrl = new URL(req.headers.referer);
      origin = `${refererUrl.protocol}//${refererUrl.host}`;
    }

    // Fallback to a default if needed
    if (!origin) {
      // Try to use some common localhost ports
      const possiblePorts = [5173, 5174, 5175, 5176, 5177, 5178, 5179, 5180, 5181];
      origin = `http://localhost:${possiblePorts[0]}`;
    }

    // Construct the redirect URL
    const redirectUrl = `${origin}/login?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`;

    console.log('Google Auth - Detected origin:', origin);
    console.log('Redirecting to:', redirectUrl);

    // Redirect to the frontend with token and user data
    res.redirect(redirectUrl);
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});