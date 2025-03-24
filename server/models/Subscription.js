const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    planId: {
        type: String,
        required: true,
        enum: ['pro', 'ultimate', 'free']
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'canceled', 'past_due', 'trialing'],
        default: 'active'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    billingCycle: {
        type: String,
        enum: ['monthly', 'yearly'],
        default: 'monthly'
    },
    price: {
        type: Number,
        required: true
    },
    features: {
        documentUploads: {
            type: Number,
            required: true
        },
        queriesPerMonth: {
            type: Number,
            required: true
        },
        fileSizeLimit: {
            type: Number,
            required: true
        },
        multilingualSupport: {
            type: Boolean,
            default: false
        }
    }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema); 