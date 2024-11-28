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
  import HomePage from './components/Offboarding/HomePage';
  import './App.css';
  import ResignationPage from './components/Offboarding/RegistrationPage';

  

  function App() {

    const [feedbackData, setFeedbackData] = useState({

        selfFeedback: [
        { type: 'selfFeedback', id: 1, employee: 'Hannah Brooks', title: 'Bewertung', status: 'Not Started', startDate: 'Nov. 1, 2024', dueDate: 'Nov. 1, 2024' },
        { type: 'selfFeedback', id: 2, employee: 'Virat Kohli', title: 'Cricketer', status: 'Started', startDate: 'Dec. 1, 2022', dueDate: 'Dec. 1, 2024' },
        { type: 'selfFeedback', id: 3, employee: 'Anusha Shetty', title: 'Trainer', status: 'Started', startDate: 'Jul. 21, 2024', dueDate: 'Jun. 1, 2025' },
      ],
      requestedFeedback: [
        { type: 'requestedFeedback', id: 4, employee: 'Caleb Fisher', title: 'Tinubu’s Performance', status: 'On Track', startDate: 'Oct. 31, 2024', dueDate: 'Oct. 31, 2024' },
        { type: 'requestedFeedback', id: 5, employee: 'John Admin', title: 'Administrator', status: 'Closed', startDate: 'Oct. 12, 2020', dueDate: 'Nov. 31, 2020' },
        { type: 'requestedFeedback', id: 6, employee: 'Sania Fisher', title: 'Developer', status: 'On Track', startDate: 'Jan. 31, 2016', dueDate: 'Feb. 1, 2016' },
      ],
      feedbackToReview: [
        { type: 'feedbackToReview', id: 7, employee: 'Lucy Cruz', title: 'Tinubu’s Performance', status: 'Closed', startDate: 'Mar. 31, 2022', dueDate: 'Apr. 31, 2023' },
        { type: 'feedbackToReview', id: 8, employee: 'Amitha Chaudhary', title: 'React Developer', status: 'On Track', startDate: 'May. 17, 2004', dueDate: 'Jun. 17, 2004' },
        { type: 'feedbackToReview', id: 9, employee: 'Ravi Gautam', title: 'Civil Engineer', status: 'Started', startDate: 'Aug. 15, 2019', dueDate: 'Sept. 15, 2019' },
      ],
      anonymousFeedback: [
        { type: 'anonymousFeedback', id: 10, employee: 'Alice Foster', title: 'Django Developer Feedback', status: 'On Track', startDate: 'May 1, 2024', dueDate: 'May 31, 2024' },
        { type: 'anonymousFeedback', id: 11, employee: 'Priyanka Gautam', title: 'Node Developer Feedback', status: 'Not Started', startDate: 'Sept 1, 2024', dueDate: 'Oct 31, 2024' },
        { type: 'anonymousFeedback', id: 12, employee: 'Sheetal Yadav', title: 'Redux Developer Feedback', status: 'Started', startDate: 'Nov 1, 2021', dueDate: 'Dec 31, 2021' },
      ],
    
      
    });

    // Function to add new feedback data
    const addFeedback = (newFeedback) => {
      console.log("Adding feedback of type:", newFeedback.type);  // Debug the type

    // Check if the type is valid before updating state
    if (!feedbackData.hasOwnProperty(newFeedback.type)) {
      console.error(`Invalid feedback type: ${newFeedback.type}`);
      return;
    }
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

                {/* Offboarding Section Routes */}
                <Route path="offboarding/exit-process" element={<HomePage />} />
                <Route path="offboarding/resignation-letter" element={<ResignationPage />} />

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
