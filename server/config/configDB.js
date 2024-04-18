const { error } = require("console");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const configDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDb is connected ✔");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = configDB;
