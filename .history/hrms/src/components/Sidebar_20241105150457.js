import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="container">
    <div className="sidebar">
      <h2>DB4CLOUD Technologies Pvt Ltd.</h2>
      <ul className="sidebar-list">
      <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/recruitment" activeClassName="active">
            Recruitment
          </NavLink>
          <ul>
            <li><NavLink to="/recruitment/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/recruitment/pipeline">Recruitment Pipeline</NavLink></li>
            <li><NavLink to="/recruitment/survey">Recruitment Survey</NavLink></li>
            <li><NavLink to="/recruitment/candidates">Candidates</NavLink></li>
            <li><NavLink to="/recruitment/open-jobs">Open Jobs</NavLink></li>
          </ul>
        </li>
        {/* Add more items as needed */}
        <li>
          <NavLink to="/onboarding" activeClassName="active">
            Onboarding
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee" activeClassName="active">
            Employee
          </NavLink>
        </li>
        <li>
          <NavLink to="/leave" activeClassName="active">
            Leave
          </NavLink>
        </li>
        <li>
          <NavLink to="/payroll" activeClassName="active">
            Payroll
          </NavLink>
        </li>
        <li>
          <NavLink to="/performance" activeClassName="active">
            Performance
          </NavLink>
        </li>
        <li>
          <NavLink to="/offboarding" activeClassName="active">
            Offboarding
          </NavLink>
        </li>
        <li>
          <NavLink to="/assets" activeClassName="active">
            Assets 
          </NavLink>
        </li>
        <li>
          <NavLink to="/help-desk" activeClassName="active">
            Help Desk
          </NavLink>
        </li>
        <li>
          <NavLink to="/configuration" activeClassName="active">
            Configuration
          </NavLink>
        </li>
      </ul>
    </div>
    
    </div>
  );
};

export default Sidebar;
