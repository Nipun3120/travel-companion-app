const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String },
  password: { type: String },
  username: { type: String, unique: true },
});

module.exports = mongoose.model("User", userSchema);
