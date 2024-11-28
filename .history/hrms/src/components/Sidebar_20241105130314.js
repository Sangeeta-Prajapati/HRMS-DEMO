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
            <li><NavLink to="/recruitment/pipeline">Recruitment Pipeline</NavLink></li>
            <li><NavLink to="/recruitment/survey">Recruitment Survey</NavLink></li>
            <li><NavLink to="/recruitment/candidates">Candidates</NavLink></li>
            <li><NavLink to="/recruitment/open-jobs">Open Jobs</NavLink></li>
          </ul>
        </li>
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
      </ul>
    </div>
    <div className="content">
        <p>Welcome to the dashboard page </p>
    </div>
    </div>
  );
};

export default Sidebar;
