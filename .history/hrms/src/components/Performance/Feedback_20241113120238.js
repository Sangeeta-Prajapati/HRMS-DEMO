import React, { useState } from 'react';
import './Feedback.css';

const initialFeedbackData = {
  selfFeedback: [
    { id: 1, employee: 'Hannah Brooks', title: 'Bewertung', status: 'Not Started', startDate: 'Nov. 1, 2024', dueDate: 'Nov. 1, 2024' },
  ],
  requestedFeedback: [
    { id: 2, employee: 'Caleb Fisher', title: 'Tinubu’s Performance', status: 'On Track', startDate: 'Oct. 31, 2024', dueDate: 'Oct. 31, 2024' },
  ],
  feedbackToReview: [
    { id: 3, employee: 'Lucy Cruz', title: 'Tinubu’s Performance', status: 'Closed', startDate: 'Oct. 31, 2024', dueDate: 'Oct. 31, 2024' },
  ],
  anonymousFeedback: [
    { id: 4, employee: 'Alice Foster', title: 'Django Developer Feedback', status: 'Not Started', startDate: 'May 1, 2024', dueDate: 'May 31, 2024' },
  ],
};

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('feedbackToReview');
  const [feedbackData, setFeedbackData] = useState(initialFeedbackData);

  const handleDelete = (id) => {
    setFeedbackData(prevData => ({
      ...prevData,
      [activeTab]: prevData[activeTab].filter(item => item.id !== id),
    }));
  };

  const handleArchive = (id) => {
    alert(`Archived feedback with ID: ${id}`);
  };

  const renderTableData = (data) => {
    return data.map(item => (
      <tr key={item.id}>
        <td>{item.employee}</td>
        <td>{item.title}</td>
        <td>{item.status}</td>
        <td>{item.startDate}</td>
        <td>{item.dueDate}</td>
        <td>
          <button onClick={() => handleArchive(item.id)}>📥</button>
          <button onClick={() => handleDelete(item.id)}>🗑️</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="feedback">
      <div className="feedback-header">
        <h2>Feedbacks</h2>
        <div className="toolbar">
          <input type="text" placeholder="Search" />
          <button>Filter</button>
          <button>Actions</button>
          <button className="create-btn">+ Create</button>
        </div>
      </div>
      <div className="tabs">
        <button className={activeTab === 'selfFeedback' ? 'active' : ''} onClick={() => setActiveTab('selfFeedback')}>Self Feedback</button>
        <button className={activeTab === 'requestedFeedback' ? 'active' : ''} onClick={() => setActiveTab('requestedFeedback')}>Requested Feedback</button>
        <button className={activeTab === 'feedbackToReview' ? 'active' : ''} onClick={() => setActiveTab('feedbackToReview')}>Feedback to Review</button>
        <button className={activeTab === 'anonymousFeedback' ? 'active' : ''} onClick={() => setActiveTab('anonymousFeedback')}>Anonymous Feedback</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Title</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Due On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderTableData(feedbackData[activeTab])}
        </tbody>
      </table>
      <div className="pagination">Page 1 of 1</div>
    </div>
  );
};

export default Feedback;
