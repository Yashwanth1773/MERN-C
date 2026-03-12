const express = require("express");
const router = express.Router();
const Product = require("../models/product");

/* Get all products */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Add product */
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;