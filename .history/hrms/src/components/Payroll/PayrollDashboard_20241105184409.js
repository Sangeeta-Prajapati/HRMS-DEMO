import React, { useState } from 'react';
import './PayrollDashboard.css';

const PayrollDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [employeeData] = useState([
    { name: 'John Doe', status: 'Draft', amount: 500 },
    { name: 'Jane Smith', status: 'Reviewed', amount: 1000 },
    { name: 'Alice Johnson', status: 'Confirmed', amount: 1500 },
    { name: 'Bob Brown', status: 'Paid', amount: 2000 },
  ]);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelection = (day) => {
    console.log(`Selected Date: ${day} ${selectedMonth} ${selectedYear}`);
    setShowCalendar(false);
  };

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



      <div className="calendar-container">
        <div className="add-calendar">Add Calendar</div>
      </div>

      <div className="export-buttons">
        {[...Array(5)].map((_, index) => (
          <button key={index} onClick={handleExportClick}>
            Export {index + 1}
          </button>
        ))}
      </div>

      {showForm && (
        <form className="export-form" onSubmit={handleSubmit}>
          <h3>Export Details</h3>
          <label>
            Start Date:
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </label>
          <label>
            Employee:
            <input type="text" name="employee" value={formData.employee} onChange={handleChange} required />
          </label>
          <label>
            Status:
            <select name="status" value={formData.status} onChange={handleChange} required>
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </label>
          <label>
            Contributions:
            <input type="text" name="contributions" value={formData.contributions} onChange={handleChange} />
          </label>
          <button type="submit">Export</button>
        </form>
      )}
    </div>
  );
};

export default PayrollDashboard;
