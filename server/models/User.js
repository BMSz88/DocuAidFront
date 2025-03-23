const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false // Not required for Google OAuth users
    },
    profilePicture: {
        type: String,
        default: ''
    },
    googleId: {
        type: String,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // For subscription
    stripeCustomerId: {
        type: String,
        default: null
    },
    subscription: {
        status: {
            type: String,
            enum: ['active', 'canceled', 'past_due', 'trialing', 'unpaid', 'incomplete', 'incomplete_expired', null],
            default: null
        },
        planId: {
            type: String,
            default: null
        },
        currentPeriodEnd: {
            type: Date,
            default: null
        }
    }
});

module.exports = mongoose.model('User', UserSchema); 