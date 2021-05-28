const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("/", async (req, res) => {
  try {
    const category = await Category.find({});
    res.json(category).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const category = new Category(payload);
    await category.save();
    res.status(201).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, { $set: payload });
    res.json(category).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  res.status(204).end();
});

module.exports = router;