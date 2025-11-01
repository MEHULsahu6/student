const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "teacher", "student"],
    default: "student",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("User", userSchema);
module.exports = user;
