const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: String,
  passwordVerify: String,
  profileImage: String,
  profileAbout: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
