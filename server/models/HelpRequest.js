// models/HelpRequest.js
const mongoose = require("mongoose");

// Define the help request schema
const helpRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  message: {
    type: String,
    required: [true, "Message is required"]
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Create the model
const HelpRequest = mongoose.model("HelpRequest", helpRequestSchema);

module.exports = HelpRequest;