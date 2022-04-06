const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/users");
var jwt = require("jsonwebtoken");
// const { v4: uuidv4 } = require("uuid");
// const { uid } = require("uid");

router.post("/register", async (req, res) => {
  try {
    // getting inputs
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    // if user already exists, return
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Encrypting password
    let encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in db
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase().trim(), // cleaning email
      password: encryptedUserPassword,
      //  _id: uid(16),
    });

    // getting token, unique for each user
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validating input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      // save user token
      user.token = token;

      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
