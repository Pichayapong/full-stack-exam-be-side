const express = require("express");
const router = express.Router();
const Shop = require("../models/shop.model");

/* GET shop listing. */
router.get("/", async (req, res) => {
  try {
    const shop = await Shop.find({});
    res.json(shop).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findById(id);
    res.json(shop).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const shop = new Shop(payload);
    await shop.save();
    res.status(201).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const shop = await Shop.findByIdAndUpdate(id, { $set: payload });
    res.json(shop).status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
