const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

const verifyToken = (req, res, next)=>{
    const bearerHead = req.headers.authorization

    if(!bearerHead || !bearerHead.startsWith("Bearer ")){
        res.status(500).send("Some error occured");
    }

    const token = bearerHead.split(" ")[1]

    try {
        const decoded = jwt.verify(token, secretKey)

        const {email, password} = decoded
        req.user = {email, password}
        next()
    } catch (error) {
        res.status(500).send("Something went wrong")
    }
}

module.exports = verifyToken