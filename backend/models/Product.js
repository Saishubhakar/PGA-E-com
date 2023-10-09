const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        default:''
    },

    price:{
        type:Number,
        required:true
    },


    rating:{
        type:Number,
        default:0
    },

    imageUrl:{
        type:String,
    }

})

module.exports = mongoose.model("Product", ProductSchema)