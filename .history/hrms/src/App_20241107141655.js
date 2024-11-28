import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RecruitmentDashboard from './components/Recruitment/RecruitmentDashboard';
import RecruitmentPipeline from './components/Recruitment/RecruitmentPipeline';
import Allowances from './components/Payroll/Allowances';
import Contract from './components/Payroll/Contract';
import Deductions from './components/Payroll/Deductions';
import Payslips from './components/Payroll/Payslips';
import PayrollDashboard from './components/Payroll/PayrollDashboard';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import CreateAllowance from './components/Payroll/CreateAllowance';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content-container">
          <Header />
          <div className="main-section">
            <Routes>
              {/* Main Dashboard Route */}
              <Route path="/" element={<><MainContent /><RightSidebar /></>} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Recruitment Section */}
              <Route path="/recruitment/dashboard" element={<RecruitmentDashboard />} />
              <Route path="/recruitment/pipeline" element={<RecruitmentPipeline />} />

              {/* Payroll Section Routes */}
              <Route path="/payroll/payroll-dashboard" element={<PayrollDashboard />} />
              <Route path="/payroll/allowances" element={<Allowances />} />
              <Route path="/allowances/create" element={<CreateAllowance />} />
              <Route path="/payroll/contract" element={<Contract />} />
              <Route path="/payroll/deductions" element={<Deductions />} />
              <Route path="/payroll/payslips" element={<Payslips />} />

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
