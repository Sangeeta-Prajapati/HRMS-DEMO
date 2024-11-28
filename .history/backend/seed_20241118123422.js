const mongoose = require('mongoose');
const Allowance = require('./models/allowanceModel'); // Adjust the path to your model
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()


const seedAllowances = async () => {
  const initialAllowancesData = [
    {
        "id": 1,
      code: "TA",
      name: "Travel Allowance",
      amount: 200.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: false,
    },
    {
        "id": 2,
      code: "HA",
      name: "House Rent Allowance",
      amount: 1000.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
        "id": 3,
      code: "DA",
      name: "Dearness Allowance",
      amount: 1500.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
        "id": 4,
      code: "MA",
      name: "Medical Allowance",
      amount: 500.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
        "id": 5,
      code: "PA",
      name: "Performance Allowance",
      amount: 300.0,
      oneTime: "Yes",
      taxable: "Yes",
      fixed: false,
    },
    {
        "id": 6,
      code: "EA",
      name: "Education Allowance",
      amount: 800.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
        "id": 7,
      code: "OA",
      name: "Overtime Allowance",
      amount: 700.0,
      oneTime: "Yes",
      taxable: "Yes",
      fixed: false,
    },
    {
        "id": 8,
      code: "LA",
      name: "Leave Allowance",
      amount: 400.0,
      oneTime: "No",
      taxable: "No",
      fixed: false,
    },
    {
        "id": 9,
      code: "FA",
      name: "Fuel Allowance",
      amount: 600.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
    {
        "id": 10,
      code: "RA",
      name: "Research Allowance",
      amount: 1200.0,
      oneTime: "No",
      taxable: "Yes",
      fixed: true,
    },
  ];

  try {
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
