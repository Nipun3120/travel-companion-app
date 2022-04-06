const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test-db')
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Database Connection failed, exiting now...");
      console.error(error);
      process.exit(1);
    });
};
