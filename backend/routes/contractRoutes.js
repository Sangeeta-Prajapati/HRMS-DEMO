const express = require("express");
const router = express.Router();
const Contract = require("../models/contract");

// Fetch all contracts
router.get("/", async (req, res) => {
  const contracts = await Contract.find();
  res.json(contracts);
});

// Create a contract
router.post("/", async (req, res) => {
  const newContract = new Contract(req.body);
  await newContract.save();
  res.json(newContract);
});

// Update a contract
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedContract = await Contract.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedContract);
});

// Delete a contract
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Contract.findByIdAndDelete(id);
  res.json({ message: "Contract deleted" });
});

module.exports = router;
