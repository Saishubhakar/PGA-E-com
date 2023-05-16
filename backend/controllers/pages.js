const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// const secretKey = "secretKey";

const registerUser =
  ("/api/register",
  async (req, res) => {
    console.log(req.body);

    try {
      const user = await User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmPassword,
      });
    } catch (error) {
      res.status(500).send("Please enter valid credentials");
    }
  });

const loginUser =
  ("/api/login",
  async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      return res.status(200).json({ user });
    } 
    
    else {
      console.log("User does not exist");
      return res.status(500).json("User does not exist");
    }
    
  });

// const verifyToken = (req, res, next) => {
//   const bearerHead = req.headers.authorization;

//   if (!bearerHead || !bearerHead.startsWith("Bearer ")) {
//     res.status(500).send("Some error occured");
//   }

//   const token = bearerHead.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, secretKey);

//     const { email, password } = decoded;
//     req.user = { email, password };
//     next();
//   } catch (error) {
//     res.status(500).send("Something went wrong");
//   }
// };

const deleteUser =
  ("/api/delete",
  async (req, res) => {
    const user = await User.findOneAndDelete({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      res.send("User does not exist");
    } else {
      res.status(200).json(user);
      console.log("User exists");
    }
  });

const updateUser =
  ("/api/update/:id",
  async (req, res) => {
    try {
      const { id: userID } = req.params;

      const task = await User.findOneAndUpdate({ _id: userID }, req.body, {
        new: true,
        runValidators: true,
        overwrite: true,
      });

      if (!task) {
        return res.status(500).send("This ID cannot be found");
      }

      res.status(200).send("Updated successfully");
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  });

module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
};