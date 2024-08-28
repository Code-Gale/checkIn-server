const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  checkedIn: {
    type: Boolean,
    default: false,
  },
  checkInTime: {
    type: Date,
    default: null,
  },
  checkOutTime: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
