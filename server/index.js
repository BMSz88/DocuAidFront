require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const EmployeeModel = require("./models/Employee");

const app = express();
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Update CORS Configuration to accept requests from both localhost:3000 and localhost:5173
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], // Allow both URLs
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// ✅ Session Configuration (Stored in MongoDB)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

// ✅ Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ JWT Middleware (Protect Routes)
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// ✅ Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google profile:", profile);
        
        if (!profile.emails || !profile.emails[0]) {
          return done(new Error("No email found in Google profile"), null);
        }
        
        let user = await EmployeeModel.findOne({ email: profile.emails[0].value });

        if (!user) {
          user = await EmployeeModel.create({
            name: profile.displayName || 'Google User',
            email: profile.emails[0].value,
            password: null // Password not needed for Google login
          });
        }
        return done(null, user);
      } catch (err) {
        console.error("❌ Google auth error:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await EmployeeModel.findById(id);
    if (!user) return done(null, false);
    done(null, user);
  } catch (err) {
    console.error("❌ Error in deserializeUser:", err);
    done(err, null);
  }
});

// ✅ Root Route for Testing
app.get("/", (req, res) => {
  res.send("Server is running successfully! 🚀");
});

// ✅ Simple API Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// ✅ Google Auth Routes
app.get("/auth/google", 
  (req, res, next) => {
    req.session.redirectTo = req.query.redirect || 'dashboard';
    next();
  },
  passport.authenticate("google", { 
    scope: ["profile", "email"],
    prompt: "select_account"
  })
);

// ✅ Google Auth Callback Route - Modified to redirect to dashboard
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { 
    failureRedirect: "http://localhost:3000/login",
    failureMessage: true
  }),
  (req, res) => {
    console.log("Google authentication successful, user:", req.user);
    
    // Create JWT token
    const token = jwt.sign({ id: req.user._id, email: req.user.email }, SECRET_KEY, { expiresIn: "1h" });

    // Choose the correct frontend URL based on the Origin header or use default
    const frontendUrl = req.get('origin') || "http://localhost:3000";
    
    // Set the token cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: "Lax", 
      maxAge: 3600000 // 1 hour
    });

    // Create user data for client storage
    const userData = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    };

    // Redirect directly to dashboard with token and user data in query params
    const redirectUrl = `${frontendUrl}/dashboard?token=${token}&userData=${encodeURIComponent(JSON.stringify(userData))}`;
    res.redirect(redirectUrl);
  }
);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 10000 // Increase timeout for better connectivity
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    console.log("Please whitelist your IP address in MongoDB Atlas: https://www.mongodb.com/docs/atlas/security-whitelist/");
  });

// ✅ User Registration Route - Enhanced with better logging
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log("Register request received:", { name, email });
    
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      console.log("Registration failed: Email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await EmployeeModel.create({ 
      name, 
      email, 
      password: hashedPassword 
    });

    console.log("User registered successfully:", email);
    res.status(201).json({ 
      message: "✅ Registration successful",
      user: { id: newUser._id, email: newUser.email, name: newUser.name }
    });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// ✅ User Login Route - Enhanced with better logging
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login request received:", { email });
    
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await EmployeeModel.findOne({ email });

    if (!user) {
      console.log("Login failed: User not found:", email);
      return res.status(400).json({ message: "No record existed" });
    }
    
    if (!user.password) {
      console.log("Login failed: User needs to use Google login:", email);
      return res.status(401).json({ message: "Use Google login instead" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Login failed: Incorrect password for:", email);
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax", // Changed from Strict to Lax for better cross-site compatibility
      maxAge: 3600000, // 1 hour
    });

    console.log("User logged in successfully:", email);
    res.json({
      message: "✅ Login successful",
      user: { id: user._id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// ✅ User Profile Route
app.get("/user/profile", verifyToken, async (req, res) => {
  try {
    const user = await EmployeeModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Logout Route
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});