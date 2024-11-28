const express = require('express');
const {  getAllowances, createAllowance, updateAllowance, deleteAllowance } = require('../controllers/allowanceController');
const router = express.Router();

// router.route('/')
//   .get(getAllowances)
//   .post(createAllowance);



  // Route to get all allowances
{/*router.get('/allowances', async (req, res) => {
    try {
      const allowances = await Allowance.find(); // Fetch all allowances
      res.status(200).json(allowances); // Send the data to the frontend
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching allowances' });
    }
  });
  
  // Route to create a new allowance
  router.post('/allowances', async (req, res) => {
    try {
      const newAllowance = new Allowance(req.body);
      await newAllowance.save(); // Save the new allowance to the database
      res.status(201).json(newAllowance); // Respond with the created allowance
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating allowance' });
    }
  });  */}
  

  router.route('/allowances')
  .get(getAllowances)
  .post(createAllowance);

router.route('/allowances/:id')
  .put(updateAllowance)
  .delete(deleteAllowance);
  

module.exports = router;
