const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/db/users");
var jwt = require("jsonwebtoken");
// const verifyToken = require("../middlewares/authJwt");
const config = require("../config/auth.config");
const createToken = require("../models/logic/authToken");
const verifyToken = require("../middlewares/authJwt");
// const { v4: uuidv4 } = require("uuid");
// const { uid } = require("uid");


let refreshTokens = [];

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(email && password && firstName && lastName)) {
      return res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // encrypting password
    let encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase().trim(), // cleaning email
      password: encryptedUserPassword,
      //  _id: uid(16),
    });

    return res.status(201).json(user);
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
      return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    console.log(user)
    if (user && (await bcrypt.compare(password, user.password))) {

      let accessToken = createToken({uid: user._id}, config.TOKEN.ACCESS_SECRET, config.TIME.jwtExpiration)
      let refreshToken = createToken({uid: user._id}, config.TOKEN.REFRESH_SECRET, config.TIME.jwtRefreshExpiration)

      refreshTokens.push(refreshToken)
      const uid = user._id;
      return res.status(200).json({ accessToken, refreshToken,  uid});
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

router.post("/protected-route", verifyToken, (req, res) => {

  User.findById(req.user.uid, (err, user)=> {
    if(err) res.status(404).json({message: "User not found"})
    res.status(200).json({ uid: req.user.uid, user});
  })

});

router.post("/renew-access-token", (req, res) => {
  const refreshAccessToken = req.body.refreshToken;
  
  // check 
  // 1.) if there is a refresh token in the request
  // 2.) if refresh token is present in refresh tokens list (if no, then the user request is anonymous)
  if (!refreshAccessToken || !refreshTokens.includes(refreshAccessToken))
    return res.status(403).json({ message: "User not Authenticated" });

  jwt.verify(refreshAccessToken, config.TOKEN.REFRESH_SECRET, (err, userObj) => {
    if (err) return res.status(403).json({ message: "User not Authenticated" });
    else {

      const accessToken = jwt.sign({uid: userObj.uid}, config.TOKEN.ACCESS_SECRET, {  // check user here :(
        expiresIn: config.TIME.jwtExpiration,
      });
      return res.status(200).json({ accessToken });
    }
  });
});


router.get("/getUserFromId", verifyToken, (req, res)=> {
    if(req.user.uid !== req.body.uid) res.status(400).json({message: "user not verified"})
    else {
      User.findById(req.body.uid, (err, user)=> {
        if(err) res.status(404).json({message: "User not found"})
        else res.status(200).json({user})
      })
    }
});

router.get("/get-all-users", async(req, res)=> {
  let data = await User.find();
  res.status(200).json({data})
})

module.exports = router;
