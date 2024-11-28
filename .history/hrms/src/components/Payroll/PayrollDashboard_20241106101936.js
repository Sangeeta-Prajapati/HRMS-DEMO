// PayrollDashboard.js
import React, { useState } from 'react';
import './PayrollDashboard.css';

const PayrollDashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="payroll-dashboard">
      <h1>Payroll Dashboard</h1>

      <div className="dashboard-header">
        <div className="date-selector">
          <label>Select Month and Year:</label>
          <input 
            type="month" 
            value={selectedDate} 
            onChange={handleDateChange}
          />
        </div>

        <div className="stats">
          <div className="stat-item">
            <h2>1</h2>
            <p>Payrolls</p>
          </div>
          <div className="stat-item">
            <h2>0</h2>
            <p>Drafts</p>
          </div>
          <div className="stat-item">
            <h2>12</h2>
            <p>Employees</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="employee-payslips">
          <h3>Employee Payslips</h3>
          <div className="payslip-chart">[Chart Placeholder]</div>
        </div>

        <div className="contributions">
          <h3>Employer Contributions</h3>
          <select className="employee-dropdown">
            <option>Hannah Brooks</option>
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
