import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Recruitment from './components/Recruitment';
import Onboarding from './components/Onboarding';
import Performance from './components/Performance';
import Payroll from './components/Payroll';
import Leave from './components/Leave';
import Employee from './components/Employee';
import Header from './components/Header';
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar';
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
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/performance" element={<Performance />} />
        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
