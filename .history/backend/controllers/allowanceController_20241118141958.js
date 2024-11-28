const Allowance = require('../models/Allowance');

exports.getAllowances = async (req, res) => {
  try {
    const allowances = await Allowance.find();
    res.status(200).json(allowances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching allowances' });
  }
};

exports.createAllowance = async (req, res) => {
  try {
    const newAllowance = new Allowance(req.body);
    await newAllowance.save();
    res.status(201).json(newAllowance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating allowance' });
  }
};

exports.updateAllowance = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAllowance = await Allowance.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAllowance) {
      return res.status(404).json({ message: 'Allowance not found' });
    }
    res.status(200).json(updatedAllowance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating allowance' });
  }
};

exports.deleteAllowance = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAllowance = await Allowance.findByIdAndDelete(id);
    if (!deletedAllowance) {
      return res.status(404).json({ message: 'Allowance not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting allowance' });
  }
};
