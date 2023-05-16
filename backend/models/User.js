const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide a name"],
        trim:true,
        maxlenght:[30, "Name cannot be more than 30 characters"]
    },

    email:{
        type:String,
        required:[true, "Please provide an email"],
        unique:true
    },

    password:{
        type:String,
        required:[true, "Please provide a password"],
    },

    confirmpassword:{
        type:String,
        required:[true, "The passwords do not match each other"]
    },


})

module.exports = mongoose.model("User", Userschema)