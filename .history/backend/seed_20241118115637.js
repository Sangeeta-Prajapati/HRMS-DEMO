const mongoose = require('mongoose');
const Allowance = require('./models/allowanceModel'); // Adjust the path to your model
const dotenv = require('dotenv')

const seedAllowances = async () => {
  const initialAllowancesData = [
    {
      code: "TA",
      name: "Travel Allowance",
      amount: 200.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: false,
    },
    {
      code: "HA",
      name: "House Rent Allowance",
      amount: 1000.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
      code: "DA",
      name: "Dearness Allowance",
      amount: 1500.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
      code: "MA",
      name: "Medical Allowance",
      amount: 500.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
      code: "PA",
      name: "Performance Allowance",
      amount: 300.0,
      oneTime: "Yes",
      taxable: "Yes",
      fixed: false,
    },
    {
      code: "EA",
      name: "Education Allowance",
      amount: 800.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
      code: "OA",
      name: "Overtime Allowance",
      amount: 700.0,
      oneTime: "Yes",
      taxable: "Yes",
      fixed: false,
    },
    {
      code: "LA",
      name: "Leave Allowance",
      amount: 400.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
      code: "FA",
      name: "Fuel Allowance",
      amount: 600.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
      code: "RA",
      name: "Research Allowance",
      amount: 1200.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
  ];

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');

    // Clear existing data
    await Allowance.deleteMany({});
    console.log('Existing allowances removed');

    // Insert new data
    await Allowance.insertMany(initialAllowancesData);
    console.log('Seed data inserted successfully');

    mongoose.disconnect();
    console.log('Database disconnected');
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.disconnect();
  }
};

seedAllowances();
