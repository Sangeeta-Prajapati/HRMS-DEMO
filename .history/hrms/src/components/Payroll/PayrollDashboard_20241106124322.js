import React, { useState } from 'react';
import {Bar} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


import './PayrollDashboard.css';

// Register the necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PayrollDashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    employee: '',
    status: '',
    contributions: ''
  });

  const handleExportClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle export logic here
    console.log('Exporting with data:', formData);
    setShowForm(false); // Close the form after submission
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Sample data for the Employee Payslip Chart
  const payslipData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Gross Salary',
        data: [3000, 3200, 3100, 3300, 3400, 3500],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Deductions',
        data: [500, 450, 400, 480, 520, 500],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Net Salary',
        data: [2500, 2750, 2700, 2820, 2880, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const employees = [
    {
      name: "Hannah Brooks",
      contributions: [
        { type: "ESI", employeeContribution: "PKR 0.00", employerContribution: "PKR 27.36" },
        { type: "Social Security (PICA)", employeeContribution: "PKR 0.00", employerContribution: "PKR 128.31" }
      ]
    },
    {
      name: "John Doe",
      contributions: [
        { type: "ESI", employeeContribution: "PKR 0.00", employerContribution: "PKR 50.00" },
        { type: "Social Security (PICA)", employeeContribution: "PKR 0.00", employerContribution: "PKR 150.00" }
      ]
    },
    {
      name: "Subikshan RamChandran",
      contributions: [
        { type: "ESI", employeeContribution: "PKR 0.00", employerContribution: "PKR 50.00" },
        { type: "Social Security (PICA)", employeeContribution: "PKR 0.00", employerContribution: "PKR 150.00" }
      ]
    },
    {
      name: "Harish Abdulapuram",
      contributions: [
        { type: "ESI", employeeContribution: "PKR 0.00", employerContribution: "PKR 50.00" },
        { type: "Social Security (PICA)", employeeContribution: "PKR 0.00", employerContribution: "PKR 150.00" }
      ]
    },
    {
      name: "Dineshsundar A",
      contributions: [
        { type: "ESI", employeeContribution: "PKR 0.00", employerContribution: "PKR 50.00" },
        { type: "Social Security (PICA)", employeeContribution: "PKR 0.00", employerContribution: "PKR 150.00" }
      ]
    }



    // Add more employee data here
  ];


  return (
    <div className="payroll-dashboard">
  {/*    <div className="status-containers">
        <div className="status-container paid">Paid</div>
        <div className="status-container confirmed">Confirmed</div>
        <div className="status-container review">Review Ongoing</div>
        <div className="status-container draft">Draft</div>
      </div>  */}


      <div className="status">
        <div className="status-item">
          <h3>Paid</h3>
          <p>12</p>
        </div>
        <div className="status-item">
          <h3>Confirmed</h3>
          <p>15</p>
        </div>
        <div className="status-item">
          <h3>Review Ongoing</h3>
          <p>98</p>
        </div>
        <div className="status-item">
          <h3>Draft</h3>
          <p>30</p>
        </div>
      </div>

        {/* for calender and export payslip details */}

      <div className="row-container">
        <div className="calendar-container">
          <div className="date-selector">
          <label>Select Month and Year:</label>
          <input 
            type="month" 
            value={selectedDate} 
            onChange={handleDateChange}
          />
        </div>
        </div>

          {/* For export form details */}
        <div className="export-buttons">
          {[...Array(1)].map((_, index) => (
            <button key={index} onClick={handleExportClick} className='export'>
              Export 
            </button>
          ))}
        </div>
      </div>

      {showForm && (
        <form className="export-form" onSubmit={handleSubmit}>
          <h3>Export Details</h3>

          <div className="form-row">
            <div className="form-group">
          <label>Start Date:</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label>End Date:</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
          </div>

          <div className="form-row">
            <div className="form-group">
          <label>Employee:</label>
            <input type="text" name="employee" value={formData.employee} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label>Status:</label>
            <select name="status" value={formData.status} onChange={handleChange} required>
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          </div>

          <div className="form-group">
          <label>Contributions:</label>
            <input type="text" name="contributions" value={formData.contributions} onChange={handleChange} />
          </div>
          <button type="submit" className='submit-button'>Export</button>
        </form>
      )}


<div className="dashboard-content">
        <div className="employee-payslips">
          <h3>Employee Payslips</h3>
          <div className="payslip-chart">
            <Bar data = {payslipData} />
          </div>
        </div>

        <div className="contributions">
          <h3>Employer Contributions</h3>
          <select className="employee-dropdown">
            <option>Hannah Brooks</option>
            <option>Harish Adulapuram</option>
            <option>Subikshan Ramachandran</option>
            <option>Dineshsundar A</option>
            {/* Add other employee names */}
          </select>
          <table>
            <thead>
              <tr>
                <th>Deduction</th>
                <th>Employee Contribution</th>
                <th>Employer Contribution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ESI</td>
                <td>PKR 0.00</td>
                <td>PKR 27.36</td>
              </tr>
              <tr>
                <td>Social Security (PICA)</td>
                <td>PKR 0.00</td>
                <td>PKR 128.31</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="contracts-ending">
          <h3>Contracts Ending</h3>
          <p>Number of contracts expiring in November 2024: 0</p>
          <div className="no-contracts">
            <p>No contracts ending this month</p>
          </div>
        </div>

        <div className="department-chart">
          <h3>Department Chart</h3>
          <div className="chart-placeholder">[Pie Chart Placeholder]</div>
        </div>
      </div>

      
    </div>
  );
};

export default PayrollDashboard;
