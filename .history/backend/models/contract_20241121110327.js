const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  contract: String,
  employee: String,
  startDate: Date,
  endDate: Date,
  wageType: String,
  basicSalary: Number,
  filingStatus: String,
});

module.exports = mongoose.model("Contract", contractSchema);
