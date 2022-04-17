const config = require("../../config/auth.config");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const createToken = (data, secret, time) => {
  let token = jwt.sign(data, secret, { expiresIn: time });
  return token;
};

module.exports = createToken;
