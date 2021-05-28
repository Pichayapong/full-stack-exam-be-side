const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
// const Shop = require("../models/shop.model")
// const Categories = require("../models/categories.model")

/* GET product listing. */
router.get("/", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product).status(200).end();
  } catch (error) {
  res.status(400).json({ error: error.toString() });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.get("/shop/:shopId", async (req, res) => {
  try {
    const { shopId } = req.params;
    const product = await Product.find({shop_id:shopId});
    res.json(product).status(200).end();
  } catch (error) {
  res.status(400).json({ error: error.toString() });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const product = new Product(payload);
    await product.save();
    res.status(201).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { $set: payload });
    res.json(product).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(204).end();
});

module.exports = router;
