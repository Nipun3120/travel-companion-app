const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  jwt.sign()
  return res.sendStatus(401).send({ message: "Unauthorized!" });
}


const verifyToken = (req, res, next) => {
     let token = req.headers["authorization"]; 
     // access token from client
     token = token.split(" ")[1];    
     if (!token) {
       return res.status(403).send({ message: "No token provided!" });
     }
     jwt.verify(token, config.TOKEN.ACCESS_SECRET, (err, user) => {
       if (err) {
         return res.status(403).json({message: "User not Authenticated, Login Again"});
       }
       req.user = user;
       next();
     });
   };

// module.exports = catchError;
module.exports = verifyToken;