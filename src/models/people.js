// models/people.js
const mongoose = require("mongoose");

// User model definition
const peopleSchema = new mongoose.Schema({
  name: String,
  username: String,
  
});

module.exports = mongoose.model("people", peopleSchema);
