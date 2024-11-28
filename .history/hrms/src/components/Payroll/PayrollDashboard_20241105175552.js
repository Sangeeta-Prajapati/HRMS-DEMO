import React, { useState } from 'react';
import './PayrollDashboard.css';

const PayrollDashboard = () => {
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

  return (
    <div className="payroll-dashboard">
  {/*    <div className="status-containers">
        <div className="status-container paid">Paid</div>
        <div className="status-container confirmed">Confirmed</div>
        <div className="status-container review">Review Ongoing</div>
        <div className="status-container draft">Draft</div>
      </div>  */}


      <div className="stats">
        <div className="stat-item">
          <h3>1</h3>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h3>0</h3>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h3>3</h3>
          <p>98</p>
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
