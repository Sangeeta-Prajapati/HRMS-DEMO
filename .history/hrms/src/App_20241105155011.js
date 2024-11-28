import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Recruitment from './components/Recruitment';
import Onboarding from './components/Onboarding';
import Performance from './components/Performance';
import Payroll from './components/Payroll/Payroll';
import Leave from './components/Leave'; 
import Employee from './components/Employee';
import Header from './components/Header';
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar';
import RecruitmentDashboard from './components/Recruitment/RecruitmentDashboard'
import RecruitmentPipeline from './components/Recruitment/RecruitmentPipeline'
//import Dashboard from './components/Payroll/Dashboard'
import Allowances from './components/Payroll/Allowances'
import Contract from './components/Payroll/Contract'
import Deductions from './components/Payroll/Deductions'
import Payslips from './components/Payroll/Payslips'



import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Sidebar/>
      <div className='content-container'>
      <Header/>
        <div className="main-section">
          <MainContent/>
          <RightSidebar/>
        </div>
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/recruitment" element={<RecruitmentDashboard />} />
            <Route path="/recruitment/dashboard" element={<RecruitmentDashboard />} />
            <Route path="/recruitment/pipeline" element={<RecruitmentPipeline />} />
              <Route path="pipeline" element={<RecruitmentPipeline />} />
              <Route path="survey" element={<div>Survey Page</div>} />
              <Route path="candidates" element={<div>Candidates Page</div>} />
              <Route path="open-jobs" element={<div>Open Jobs Page</div>} />
        <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/payroll/dashboard" element={<Dashboard />} />
            <Route path="/payroll/allowances" element={<Allowances />} />
            <Route path="/payroll/contract" element={<Contract />} />
            <Route path="/payroll/deductions" element={<Deductions />} />
            <Route path="/payroll/payslips" element={<Payslips />} />
            <Route path="/performance" element={<Performance />} />
            
        </Routes>
</div>
      </div>
    </div>
    </Router>
  );
}

export default App;
