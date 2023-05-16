const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const connectionString =
  "mongodb+srv://Onepiece-E-commerce:onepiece@cluster0.eqfu2or.mongodb.net/OnepieceUsers";

const User = require("./models/User");
const notFound = require("./middleware/notFound");
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";
const routes = require("./routes/route");
const productsRoutes = require("./routes/productroutes")
// const verify = require("./middleware/verify")

app.use(express.json());
app.use(cors());

app.use("/api", routes)
app.use("/api/v1", productsRoutes)


app.use(notFound);

const start = () => {
  try {
    app.listen(5000, () => {
      console.log("The server is open on port 5000");
    });
    connectDB(connectionString);
  } catch (error) {
    console.log("Something went wrong");
  }
};

start();