const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
const port = 3001;

app.use(express.json());

var morgan = require("morgan");

app.use(morgan("tiny"));

const productRoute = require("./routes/product-routes");
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongodb: mongoose.connect(process.env.MONGO_URL);
