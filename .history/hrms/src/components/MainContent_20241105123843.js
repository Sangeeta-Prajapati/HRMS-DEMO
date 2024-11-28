import React from 'react';
 import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="stats">
        <div className="stat-item">
          <h3>New Joining Today</h3>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h3>New Joining This Week</h3>
          <p>0</p>
        </div>
        <div className="stat-item">
          <h3>Total Strength</h3>
          <p>98</p>
        </div>
      </div>

      <div className='main-content'>
        <div className='charts'>
          {/* Row 1 */}
          <div className="chart online-employees">Online Employees</div>
          <div className="chart overall-leave">Overall Leave</div>
          
          {/* Row 2 */}
          <div className="chart recruitment-analytics">Recruitment Analytics</div>
          <div className="chart attendance-analytics">Attendance Analytics</div>

          {/* Row 3 */}
          <div className="chart work-chart">Work Chart</div>
          <div className="chart employee-chart">Employee Chart</div>
        </div>
      </div>
      

    </div>
  );
};

export default MainContent;
