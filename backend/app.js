const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/users", (req, res, next) => {
  const users = [
    {
      id: "1",
      name: "Luke",
      content: "I will make a DND Master with ChatGPT"
    },
    {
      id: "2",
      name: "Betty",
      content: "This is my wife! She play computer games every day!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    users: users
  });
});

module.exports = app;