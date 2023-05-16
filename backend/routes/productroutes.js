const express = require("express")
const router = express.Router()

const {
    getProducts,
    createProducts,
    getAllProducts,
    getAllProductsStatic,
} = require("../controllers/products")

router.route("/getproducts").get(getProducts)
router.route("/createproducts").post(createProducts)
router.route("/getAllProducts").get(getAllProducts)

module.exports = router