const express = require('express');
const { getAllowances, createAllowance, updateAllowance, deleteAllowance } = require('../controllers/allowanceController');
const router = express.Router();

router.route('/')
  .get(getAllowances)
  .post(createAllowance);


  router.route('/:id')
  .put(updateAllowance)
  .delete(deleteAllowance);

 module.exports = router;
