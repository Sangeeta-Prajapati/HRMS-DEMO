import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="announcements">
        <h3>Announcements</h3>
        <p>No Announcements to show.</p>
      </div>
      <div className="on-leave">
        <h3>On Leave</h3>
        <ul>
          <li>Adam Luis</li>
          <li>Jessica Evans</li>
          <li>Alexander Smith</li>
        </ul>
      </div>
      <div className="employee-info">
        <h3>Employee Work Information</h3>
        <ul>
          <li>test item - 100% Complete</li>
          <li>Arun Kumar - 100% Complete</li>
          {/* Other employees */}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
