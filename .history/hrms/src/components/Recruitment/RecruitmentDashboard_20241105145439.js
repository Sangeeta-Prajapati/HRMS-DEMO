import React from 'react';
import { Outlet } from 'react-router-dom';

function RecruitmentDashboard() {
  return (
    <div>
      <h1>Recruitments</h1>
      <Outlet />
    </div>
  );
}

export default RecruitmentDashboard;
