const express = require('express');
const { getAllowances, createAllowance } = require('../controllers/allowanceController');
const router = express.Router();

router.route('/')
  .get(getAllowances)
  .post(createAllowance);

module.exports = router;
