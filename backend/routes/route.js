const express = require("express")
const router = express.Router()
const {registerUser, 
    loginUser,
    deleteUser,
    protectedData} = require("../controllers/pages")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/delete").delete(deleteUser)
router.route("/protected-data").get(protectedData)

module.exports = router