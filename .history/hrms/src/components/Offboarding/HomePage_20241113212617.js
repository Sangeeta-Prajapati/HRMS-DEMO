import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [offboardingStages, setOffboardingStages] = useState([
    {
      stageName: "Notice Period",
      employees: [
        {
          id: 1,
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
  const [editData, setEditData] = useState(null);

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
            id: Date.now(),
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

  {/*
  const handleExpand = (index) => {
    const updatedStages = offboardingStages.map((stage, i) =>
      i === index ? { ...stage, expanded: !stage.expanded } : stage
    );
    setOffboardingStages(updatedStages);
  };

    const handleEdit = (employee, stageIndex) => {
    setEditData({ ...employee, stageIndex });
    setEditOpen(true);
  };

    const handleDelete = (employeeId, stageIndex) => {
    const updatedStages = offboardingStages.map((stage, index) => {
      if (index === stageIndex) {
        return {
          ...stage,
          employees: stage.employees.filter(emp => emp.id !== employeeId),
        };
      }
      return stage;
    });
    setOffboardingStages(updatedStages);
  };

  const handleSaveEdit = () => {
    const { stageIndex, id, ...updatedEmployee } = editData;
    const updatedStages = offboardingStages.map((stage, index) => {
      if (index === stageIndex) {
        return {
          ...stage,
          employees: stage.employees.map(emp =>
            emp.id === id ? { ...emp, ...updatedEmployee } : emp
          ),
        };
      }
      return stage;
    });
    setOffboardingStages(updatedStages);
    setEditOpen(false);
  };

*/}

const handleExpand = (index) => {
  setOffboardingStages((prev) =>
    prev.map((stage, i) => (i === index ? { ...stage, expanded: !stage.expanded } : stage))
  );
};

const handleEdit = (stageIndex, employeeId) => {
  setOffboardingStages((prev) =>
    prev.map((stage, i) =>
      i === stageIndex
        ? {
            ...stage,
            employees: stage.employees.map((emp) =>
              emp.id === employeeId ? { ...emp, isEditing: !emp.isEditing } : emp
            ),
          }
        : stage
    )
  );
};


const handleDelete = (stageIndex, employeeId) => {
  setOffboardingStages((prev) =>
    prev.map((stage, i) =>
      i === stageIndex
        ? { ...stage, employees: stage.employees.filter((emp) => emp.id !== employeeId) }
        : stage
    )
  );
};

const handleSaveEdit = (stageIndex, employeeId, updatedEmployee) => {
  setOffboardingStages((prev) =>
    prev.map((stage, i) =>
      i === stageIndex
        ? {
            ...stage,
            employees: stage.employees.map((emp) =>
              emp.id === employeeId ? { ...updatedEmployee, isEditing: false } : emp
            ),
          }
        : stage
    )
  );
};

const handleInputChange = (e, stageIndex, employeeId) => {
  const { name, value } = e.target;
  setOffboardingStages((prev) =>
    prev.map((stage, i) =>
      i === stageIndex
        ? {
            ...stage,
            employees: stage.employees.map((emp) =>
              emp.id === employeeId ? { ...emp, [name]: value } : emp
            ),
          }
        : stage
    )
  );
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

      {editOpen && (
        <div className="edit-popup">
          <h3>Edit Offboarding</h3>
          <form>
            <div className="form-row">
              <label>Employee Name</label>
              <input 
                type="text" 
                value={editData.employeeName} 
                onChange={(e) => setEditData({ ...editData, employeeName: e.target.value })} 
              />
            </div>
            <div className="form-row">
              <label>Stage</label>
              <input 
                type="text" 
                value={editData.stage} 
                onChange={(e) => setEditData({ ...editData, stage: e.target.value })} 
              />
            </div>
            <button type="button" onClick={handleSaveEdit}>Save</button>
            <button type="button" onClick={() => setEditOpen(false)}>Cancel</button>
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
                    {stage.employees.map((emp) => (
                      <tr key={emp.id}>
                        {emp.isEditing ? (
                          <>
                            <td>
                              <input
                                type="text"
                                name="employeeName"
                                value={emp.employeeName}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                name="noticePeriod"
                                value={emp.noticePeriod}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <input
                                type="date"
                                name="startDate"
                                value={emp.startDate}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <input
                                type="date"
                                name="endDate"
                                value={emp.endDate}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                name="stage"
                                value={emp.stage}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                name="taskStatus"
                                value={emp.taskStatus}
                                onChange={(e) => handleInputChange(e, index, emp.id)}
                                className="edit-input"
                              />
                            </td>
                            <td>
                              <button onClick={() => handleSaveEdit(index, emp.id, emp)}>Save</button>
                              <button onClick={() => handleEdit(index, emp.id)}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{emp.employeeName}</td>
                            <td>{emp.noticePeriod}</td>
                            <td>{emp.startDate}</td>
                            <td>{emp.endDate}</td>
                            <td>{emp.stage}</td>
                            <td>{emp.taskStatus}</td>
                            <td>
                              <button onClick={() => handleEdit(index, emp.id)}>✏️</button>
                              <button onClick={() => handleDelete(index, emp.id)}>🗑️</button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>



    {/*  <div className="offboarding-list">
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
                        <tr key={emp.id}>
                          <td>{emp.employeeName}</td>
                          <td>{emp.noticePeriod}</td>
                          <td>{emp.startDate}</td>
                          <td>{emp.endDate}</td>
                          <td>{emp.stage}</td>
                          <td>{emp.taskStatus}</td>
                          <td>
                            <button onClick={() => handleEdit(emp, index)}>✏️</button>
                            <button onClick={() => handleDelete(emp.id, index)}>🗑️</button>
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
      */}
    </div>
  );
};

export default HomePage;
