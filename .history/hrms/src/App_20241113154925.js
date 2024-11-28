import React from 'react';
import { useState } from 'react';
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
import CreateDeduction from './components/Payroll/CreateDeduction';
import FederalTax from './components/Payroll/FederalTax';
import PerformanceDashboard from './components/Performance/PerformanceDashboard';
import Objectives from './components/Performance/Objectives';
import Feedback from './components/Performance/Feedback';
import CreateFeedback from './components/Performance/CreateFeedback'
import './App.css';

function App() {

  const [feedbackData, setFeedbackData] = useState({

    selfFeedback: [],  // Initialize as an empty array
  requestedFeedback: [],  // Initialize as an empty array
  feedbackToReview: [],  // Initialize as an empty array
  anonymousFeedback: [],  // Initialize as an empty array
 

  });

  // Function to add new feedback data
  const addFeedback = (newFeedback) => {
    setFeedbackData(prevData => ({
      ...prevData,
      [newFeedback.type]: [...prevData[newFeedback.type], newFeedback],
    }));
  };

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
              <Route path = "/deductions/create" element={<CreateDeduction />} />
              <Route path="/payroll/payslips" element={<Payslips />} />
              <Route path="/payroll/federal-tax" element={<FederalTax/>} />

              {/* Performance Section Routes */}
              <Route path="/performance/performance-dashboard" element={<PerformanceDashboard />} />
              <Route path="/performance/objectives" element={< Objectives />} />
              <Route path="/performance/feedback" element={<Feedback feedbackData={feedbackData}  setFeedbackData={setFeedbackData}/>} />
              <Route path="/feedback/create" element={<CreateFeedback addFeedback={addFeedback}/>} />


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
