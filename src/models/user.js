// models/user.js
const mongoose = require('mongoose');

// User model definition
const userSchema = new mongoose.Schema({
  Name: String,
  Mobile: Number,
  Email: String,
  Password: String,
});

module.exports = mongoose.model('users', userSchema);


