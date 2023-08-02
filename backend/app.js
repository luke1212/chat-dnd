// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/users");

//MongoDB connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
require('dotenv').config({ path: './.env' });

mongoose
  .connect(
   process.env.MONGODB_URI
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log(process.env.MONGODB_URI);
    console.log("Connection failed!");
  });

// Import routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/users", userRoutes);

module.exports = app;