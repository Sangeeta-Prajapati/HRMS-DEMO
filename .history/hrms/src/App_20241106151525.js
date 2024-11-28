// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Recruitment from './components/Recruitment';
import Onboarding from './components/Onboarding';
import Performance from './components/Performance';
//import Payroll from './components/Payroll/Payroll';
import Leave from './components/Leave'; 
import Employee from './components/Employee';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import RecruitmentDashboard from './components/Recruitment/RecruitmentDashboard';
import RecruitmentPipeline from './components/Recruitment/RecruitmentPipeline';
import Allowances from './components/Payroll/Allowances';
import Contract from './components/Payroll/Contract';
import Deductions from './components/Payroll/Deductions';
import Payslips from './components/Payroll/Payslips';
import PayrollDashboard from './components/Payroll/PayrollDashboard';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className='content-container'>
          <Header />
          <div className="main-section">
            <Routes>
              {/* Main Dashboard Route */}
              <Route path="/" element={<><MainContent /><RightSidebar /></>} />

              {/* Subpage Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/recruitment/dashboard" element={<RecruitmentDashboard />} />
              <Route path="/recruitment/pipeline" element={<RecruitmentPipeline />} />
              <Route path="/recruitment/survey" element={<div>Survey Page</div>} />
              <Route path="/recruitment/candidates" element={<div>Candidates Page</div>} />
              <Route path="/recruitment/open-jobs" element={<div>Open Jobs Page</div>} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/employee" element={<Employee />} />

              {/* Payroll Section Routes */}

              <Route path="/employee" element={<EmployeeDashboard />} />
            {/* Other routes */}
            <Route path="*" element={<Navigate to="/employee" />} />

              <Route path="/leave" element={<Leave />} />
              
              {/* Payroll Section Routes 
              <Route path="/payroll" element={<Payroll />} />  */}
              <Route path="/payroll/allowances" element={<Allowances />} />
              <Route path="/payroll/contract" element={<Contract />} />
              <Route path="/payroll/deductions" element={<Deductions />} />
              <Route path="/payroll/payslips" element={<Payslips />} />
              <Route path="/payroll/payroll-dashboard" element={<PayrollDashboard />} />
              <Route path="/performance" element={<Performance />} />
              

              {/* Redirect unknown routes to main dashboard */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
