const express = require('express');
const cors = require('cors');
const allowanceRoutes = require('./routes/allowanceRoutes');
const connectDB = require('./config/db');
const allowances = [];
const dotenv = require('dotenv');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', allowanceRoutes);

// Get all allowances
app.get("/api/allowances", (req, res) => {
    res.json(allowances);
  });
  
  // Create a new allowance
  app.post("/api/allowances", (req, res) => {
    const newAllowance = { id: Date.now(), ...req.body };
    allowances.push(newAllowance);
    res.status(201).json(newAllowance);
  });
  
  // Update an allowance
  app.put("/api/allowances/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = allowances.findIndex((a) => a.id === id);
    if (index !== -1) {
      allowances[index] = { ...allowances[index], ...req.body };
      res.json(allowances[index]);
    } else {
      res.status(404).json({ message: "Allowance not found" });
    }
  });
  
  // Delete an allowance
  app.delete("/api/allowances/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = allowances.findIndex((a) => a.id === id);
    if (index !== -1) {
      allowances.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Allowance not found" });
    }
  });




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

