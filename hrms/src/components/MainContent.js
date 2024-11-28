import React from 'react';
 import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-contents">
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

          {/* Row 4 */}
          <div className="chart department-chart">Department Chart</div>
          <div className="chart gender-chart">Gender Chart</div>
          <div className="chart objective-status">Objective Status</div>

          {/* Row 5 */}
          <div className="chart key-result-status">Key Result Status</div>
          <div className="chart shift-requests">Shift Requests to Approve</div>

          <div className="approvals">
            <div className="approval overtime-to-approve">Overtime to Approve</div>
            <div className="approval leave-requests">Leave Requests to Approve</div>
            <div className="approval asset-requests">Asset Requests to Approve</div>
          </div>
        </div>
      </div>
     
      
      

    </div>
  );
};

export default MainContent;
