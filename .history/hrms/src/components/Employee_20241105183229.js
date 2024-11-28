// EmployeeDashboard.js
import React, { useState } from 'react';
import './Employee.css';

const Employee = () => {
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

  const handleDateSelection = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
    setShowCalendar(false);
  };

  return (
    <div className="employee-dashboard">
      <div className="container">
        <div className="month-year-selector">
          <select value={selectedMonth} onChange={handleMonthChange} onClick={toggleCalendar}>
            <option value="">Select Month</option>
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {[2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button onClick={toggleCalendar}>
            {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
          </button>
          {showCalendar && (
            <div className="calendar">
              <h3>Select a Date</h3>
              {/* Simple representation of the calendar */}
              <div className="calendar-month">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'].map((day) => (
                  <div key={day} className="calendar-day" onClick={() => handleDateSelection(selectedMonth, selectedYear)}>
                    {day}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="employee-details">
          <h3>Employee Details for {selectedMonth} {selectedYear}</h3>
          <div className="employee-chart">
            {employeeData.map((employee, index) => (
              <div key={index} className={`employee-status ${employee.status.toLowerCase()}`}>
                <span>{employee.name}</span>
                <span>{employee.status}</span>
                <span>${employee.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
