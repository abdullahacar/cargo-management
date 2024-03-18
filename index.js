const express = require("express");
const mongoose = require("mongoose");
const DeliveryDAO = require("./models/delivery.model.js");
const productRoute = require("./routes/delivery.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const DB_URL = "mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000";
const CONTEXT_PATH = "/api/delivery";
const PORT = 3000;


// routes
app.use(CONTEXT_PATH, productRoute);
  
app.get("/", (req, res) => {
  res.send("Cargo Management Server API");
});
 
mongoose
  .connect(
    DB_URL
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port : " + PORT);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
