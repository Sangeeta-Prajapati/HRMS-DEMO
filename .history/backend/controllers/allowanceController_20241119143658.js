const Allowance = require('../models/allowanceModel');

// @desc Get all allowances
// @route GET /api/allowances
// @access Public
const getAllowances = async (req, res) => {
  try {
    const allowances = await Allowance.find();
    res.status(200).json(allowances);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

// @desc Create a new allowance
// @route POST /api/allowances
// @access Public
const createAllowance = async (req, res) => {

  console.log("Received POST request body:", req.body)

  const { code, name, amount, oneTime, taxable, fixed } = req.body;

  console.log(code, name, amount, oneTime, taxable, fixed)

  if (!code || !name || !amount) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  try {
    const allowance = new Allowance({ code, name, amount, oneTime, taxable, fixed });
    const savedAllowance = await allowance.save();
    console.log("Allowance saved:", savedAllowance)
    res.status(201).json(savedAllowance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllowances, createAllowance };
