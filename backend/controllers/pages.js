const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secretKey = "secretKey";

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
      const accessToken = jwt.sign({_id:user._id},  secretKey, {expiresIn:'1m'});
      return res.status(200).send({data:{user, accessToken}});
    }
    
    else {
      console.log("User does not exist");
      return res.status(500).json("User does not exist");
    }
    
  });


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



const protectedData = ('/protected-data', async(req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1];

  try {
    const decodedToken = jwt.verify(accessToken, secretKey);
    const usid = decodedToken._id
    const UserInfo = await User.findOne({_id:usid})
    
    res.json({ message: 'Protected data', user: UserInfo });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  protectedData,
};