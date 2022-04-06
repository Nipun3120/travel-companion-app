require("dotenv").config();
require("./config/database").connect();
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(require("./controllers"))

// setting port
const port = process.env.PORT || 4000;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
