const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("", (req, res, next) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    })
  
    console.log(req.body);
    user.save().then(createdPost => {
      res.status(201).json({
        message: "Users added successfully",
        userId: createdPost._id
      }); 
    });
  });
  
router.get("", (req, res, next) => {
User.find().then(users => {
    res.status(200).json({
    message: "Posts fetched successfully!",
    users: users
    });
});
});

router.delete("/:id", (req, res, next) => {
User.findByIdAndDelete(req.params.id).then(result => {
    console.log(result);
    res.status(200).
    json({
        message: "User deleted!"
    });
});
});

module.exports = router;