const express = require("express");
const app = express();
const Product = require("../models/Product");

const getProducts =
  ("/api/v1/getproducts",
  async (req, res) => {

    const products = await Product.find({});
    res.send(products)
  });

const createProducts =
  ("/api/v1/createproducts",
  async (req, res) => {
    console.log(req.body);

    try {
      const products = await Product.create({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        price: req.body.price,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
        date: req.body.date,
        imageUrl:req.body.imageUrl
      });
    } catch (error) {
      res.status(500).send("Please enter valid credentials");
    }
  });

const getAllProducts =
  ("api/v1/getAllProducts",
  async (req, res) => {
    try {
      const { isFeatured, brand, name, sort, fields, NumericFilters } =
        req.query;
      const queryObject = {};

      if (isFeatured) {
        queryObject.isFeatured = isFeatured === "true" ? true : false;
      }

      if (brand) {
        queryObject.brand = brand;
      }

      if (name) {
        queryObject.name = { $regex: name, $options: "i" };
      }

      let result = Product.find(queryObject);

      if (sort) {
        
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);

      } else {
        result = result.sort("date");
      }

      if (fields) {
        const fieldsList = fields.split(",").join(" ");
        result = result.select(fieldsList);
      }

      if (NumericFilters) {
        const operatorMap = {
          ">": "$gt",
          ">=": "$gte",
          "<": "$lt",
          "=": "$eq",
          "<=": "$lte",
        };

        const regEx = /\b(<|>|>=|=|<|<=|)\b/g;

        let filters = NumericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );

        const options = ["price", "rating"];
        filter = filters.split(",").forEach((item) => {
          const [field, operator, value] = item.split("-");

          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });

        console.log(filters);
      }

      const prods = await result;

      console.log(queryObject);
      res.status(200).json({ prods  , nbHits: prods.length });
    } catch (error) {
      res.status(500).send("Some error occured");
    }

    // const products = await Product.find({}).sort("-price")
    // res.status(200).json({products, nbHits: products.length})
  });

module.exports = {
  getProducts,
  createProducts,
  getAllProducts,
};
