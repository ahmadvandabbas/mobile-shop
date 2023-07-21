const express = require("express");
const path = require("path");

const cors = require("cors");
const products = require("./products");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to our onlineShop API... ");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.use("/images", express.static("images"));

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${port}`));
