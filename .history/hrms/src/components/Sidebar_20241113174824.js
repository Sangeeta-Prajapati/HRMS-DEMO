import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css"
const Sidebar = () => {
  const [isPayrollOpen, setIsPayrollOpen] = useState(false);
  const togglePayrollMenu = () => {
    setIsPayrollOpen(!isPayrollOpen);
  };


const [isPerformanceOpen, setisPerformanceOpen] = useState(false)
const togglePerformanceMenu = () => {
  setisPerformanceOpen(!isPerformanceOpen)
}

const [isExitProcessOpen, setIsExitProcessOpen] = useState(false)
const toggleExitMenu = () => {
  setIsExitProcessOpen(!isExitProcessOpen)
}


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
            {/* Payroll section */}
        <li>
          <NavLink to="/payroll" activeClassName="active" className="menu-toggle" onClick={togglePayrollMenu}>
            Payroll
          </NavLink>  

          {isPayrollOpen && (
            <ul className="submenu">
              <li><NavLink to="/payroll/payroll-dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/payroll/allowances">Allowances</NavLink></li>
              <li><NavLink to="/payroll/contract">Contracts</NavLink></li>
              <li><NavLink to="/payroll/deductions">Deductions</NavLink></li>
              <li><NavLink to="/payroll/payslips">Payslips</NavLink></li>
              <li><NavLink to="/payroll/federal-tax">Federal Tax</NavLink></li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/performance" activeClassName="active" className="menu-toggle" onClick={togglePerformanceMenu}>
            Performance
          </NavLink>
          {isPerformanceOpen && (
            <ul className="submenu">
                  <li><NavLink to="/performance/performance-dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/performance/objectives">Objectives</NavLink></li>
                  <li><NavLink to="/performance/feedback">360 Feedback</NavLink></li>
                  
                </ul>
          )

          }

        </li>
        <li>
          <NavLink to="/offboarding" activeClassName="active" className="menu-toggle" onClick={toggleExitMenu}>
            Offboarding
            </NavLink>
            {isExitProcessOpen && (
              <ul className="submenu">
              <li><NavLink to="/offboarding/exit-process">Exit Process</NavLink></li>
              <li><NavLink to="/offboarding/resignation-letter">Resignation Letters</NavLink></li>  
            </ul>
            )}
          
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
