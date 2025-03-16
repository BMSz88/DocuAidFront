const mongoose = require("mongoose");

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    // Password can be null for Google OAuth users
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Create the model
const EmployeeModel = mongoose.model("Employee", employeeSchema);

module.exports = EmployeeModel;