import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
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
          isEditing: false,
        },
      ],
      expanded: true,
    },
    // Other stages...
  ]);

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
    </div>
  );
};

export default HomePage;
