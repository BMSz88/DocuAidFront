const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false,
                message: 'Unauthorized - No token provided' 
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user from decoded token
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        // Set user information to request
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ 
            success: false,
            message: 'Unauthorized - Invalid token' 
        });
    }
};

// Middleware to check if user is an admin
exports.isAdmin = async (req, res, next) => {
    try {
        // First check if the user is authenticated
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false,
                message: 'Unauthorized - No token provided' 
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user from decoded token
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        // Check if user is an admin
        if (!user.isAdmin) {
            return res.status(403).json({ 
                success: false,
                message: 'Forbidden - Admin access required' 
            });
        }

        // Set user information to request
        req.user = user;
        next();
    } catch (error) {
        console.error('Admin authentication error:', error);
        return res.status(401).json({ 
            success: false,
            message: 'Unauthorized - Invalid token' 
        });
    }
}; 