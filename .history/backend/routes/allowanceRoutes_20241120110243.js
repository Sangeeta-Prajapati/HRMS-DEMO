const express = require('express');
const { getAllowances, createAllowance, updateAllowance, deleteAllowance } = require('../controllers/allowanceController');
const router = express.Router();

router.route('/')
  .get(getAllowances)
  .post(createAllowance);



 module.exports = router;
