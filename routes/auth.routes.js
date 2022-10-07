// ℹ️ import requires
const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ℹ️ import auth middleware
const { isAuthenticated } = require("../middlewares/jwt.middleware");

// ℹ️ import models
const User = require("../models/User.model");

// ℹ️ set up routes
// POST signup
router.post("/signup", (req, res) => {
  const { username, email, password, passwordVerify } = req.body;

  //check for errors
  if (!username || !email || !password || !passwordVerify) {
    res.json({ error: "All fields are required" });
  }

  User.findOne({ username })
    .then((foundUser) => {
      //if username already exists in the DB throw error
      if (foundUser) {
        res.json({ error: "An account already exists with that username" });
      }

      return User.create({
        username,
        email,
        password: bcryptjs.hashSync(password),
      });
    })
    .then((createdUser) => {
      console.log(createdUser);
      res.json({ user: createdUser });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//POST login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  //check to make sure username and password are provided
  if (!username || !password) {
    res.json({ error: "Username and password required" });
  }

  User.findOne({ username })
    .then((foundUser) => {
      //if user is not found return error
      if (!foundUser) {
        res.json({ error: "Invalid username or password" });
        return;
      }

      console.log(foundUser);

      //check if the password is valid
      const isValidPassword = bcryptjs.compareSync(
        password,
        foundUser.password
      );

      //if password does not match send error
      if (!isValidPassword) {
        res.json({ error: "Invalid username or password" });
        return;
      }

      //set up payload for webtoken
      const payload = {
        username: foundUser.username,
        _id: foundUser._id,
      };

      //setup the auth token
      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "6h",
        algorithm: "HS256",
      });

      res.json({ message: authToken });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//GET verify
router.get("/verify", isAuthenticated, (req, res) => {
  console.log("Hey from Verify - token payload", req.payload);
  res.json(req.payload);
});

module.exports = router;
