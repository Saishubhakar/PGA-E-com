const express = require("express")
const router = express.Router()
const {registerUser, 
    loginUser,
    deleteUser,} = require("../controllers/pages")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/delete").delete(deleteUser)

module.exports = router