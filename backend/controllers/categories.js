const express = require("express");
const app = express();
const Category = require("../models/Category");

app.get("/api/getCategories", async(req, res)=>{
    const categoryList = await Category.find({});

    if (!categoryList){
        res.status(500).json({success:false})
    }

    res.send(categoryList)
})

app.post("/api/sakdfj", async()=>{
    let category = new Category({
        name: req.body.name,
        icon:req.body.icon,
        color:req.body.color,
    })
})