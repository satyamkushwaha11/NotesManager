const mongoose = require("mongoose");
require("dotenv").config();

const mongooseURI = process.env.DB_URL

const connectToMongo = async() => {
  mongoose.connect(
    mongooseURI,
    {
      useNewUrlParser: true,
    },

    () => {
      console.log("Connected to Mongo succesfully.");
      return 
    }
  );
 
};

module.exports = connectToMongo;
