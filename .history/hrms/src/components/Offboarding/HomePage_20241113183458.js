import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [offboardingStages, setOffboardingStages] = useState([
    {
      stageName: "Notice Period",
      employees: [
        {
          employeeName: "Aria Powell",
          noticePeriod: "1 month, 4 weeks",
          startDate: "13/11/2024",
          endDate: "12/01/2025",
          stage: "Notice Period",
          taskStatus: "0/0",
        },
      ],
      expanded: false,
    },
    {
      stageName: "Exit Interview",
      employees: [],
      expanded: false,
    },
    {
      stageName: "Work Handover",
      employees: [],
      expanded: false,
    },
  ]);
  const [newData, setNewData] = useState({
    title: '',
    description: '',
    manager: '',
    status: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreate = () => {
    setCreateOpen(true);
  };

  const handleCloseCreate = () => {
    setCreateOpen(false);
  };

  const handleSave = () => {
    setOffboardingStages([
      ...offboardingStages,
      {
        stageName: newData.title,
        employees: [
          {
            employeeName: newData.manager,
            noticePeriod: "4 weeks, 1 day",
            startDate: "13/11/2024",
            endDate: "13/12/2024",
            stage: newData.status,
            taskStatus: "0/0",
          },
        ],
        expanded: false,
      },
    ]);
    setCreateOpen(false);
  };

  const handleExpand = (index) => {
    const updatedStages = offboardingStages.map((stage, i) =>
      i === index ? { ...stage, expanded: !stage.expanded } : stage
    );
    setOffboardingStages(updatedStages);
  };

  return (
    <div className="home-page">
      <h2>Offboarding</h2>

      <div className="top-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearch} 
          className="search-input"
        />
        <button onClick={() => setFilterOpen(!filterOpen)} className="filter-btn">Filter</button>
        <button onClick={handleCreate} className="create-btn">+ Create</button>
      </div>

      {filterOpen && <div className="filter-popup">Filter options go here</div>}

      {createOpen && (
        <div className="create-popup">
          <h3>Offboarding</h3>
          <form>
            <div className="form-row">
              <label>Title <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.title} 
                onChange={(e) => setNewData({ ...newData, title: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Description <span className="required">*</span></label>
              <textarea 
                value={newData.description} 
                onChange={(e) => setNewData({ ...newData, description: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Manager <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.manager} 
                onChange={(e) => setNewData({ ...newData, manager: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Status <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.status} 
                onChange={(e) => setNewData({ ...newData, status: e.target.value })} 
                required 
              />
            </div>
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleCloseCreate}>Cancel</button>
          </form>
        </div>
      )}

      <div className="offboarding-list">
        {offboardingStages.map((stage, index) => (
          <div key={index} className="stage-item">
            <div className="stage-header" onClick={() => handleExpand(index)}>
              <span>{stage.stageName}</span>
              <button>{stage.expanded ? '-' : '+'}</button>
            </div>
            {stage.expanded && (
              <div className="stage-content">
                {stage.employees.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Notice Period</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Stage</th>
                        <th>Task Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stage.employees.map((emp, empIndex) => (
                        <tr key={empIndex}>
                          <td>{emp.employeeName}</td>
                          <td>{emp.noticePeriod}</td>
                          <td>{emp.startDate}</td>
                          <td>{emp.endDate}</td>
                          <td>{emp.stage}</td>
                          <td>{emp.taskStatus}</td>
                          <td>
                            <button>Actions</button>
                            <button>Add Task</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No data available.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
