const mongoose = require("mongoose");

const allowanceSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  oneTime: { type: String, default: "No" },
  taxable: { type: String, default: "No" },
  fixed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Allowance", allowanceSchema);
