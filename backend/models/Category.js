const mongoose = require("mongoose");

const CatergorySchema = new mongoose.model({
    name:{
        type:String,
        required:true
    },

    brand:{
        type:String
    },

    color:{
        type:String
    }
})

module.exports = mongoose.model("Category", CatergorySchema)