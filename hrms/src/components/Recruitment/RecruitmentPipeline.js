import React from 'react';
import './RecruitmentPipeline.css';

function RecruitmentPipeline() {
  return (
    <div className="pipeline-container">
      <h2>Recruitment Pipeline</h2>

      <div className="pipeline-section">
        <h3>Initial</h3>
        <table className="recruitment-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Email</th>
              <th>Job Position</th>
              <th>Contact</th>
              <th>Scheduled Interviews</th>
              <th>Rating</th>
              <th>Stage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arnoldo Hayes</td>
              <td>arnoldo@demo.com</td>
              <td>Odoo Dev</td>
              <td>9876543210</td>
              <td>Interviews Scheduled: 1</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>Initial</td>
              <td>
                <button>View</button>
                <button>Edit</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Add more sections like "Interview," "Hired," etc. */}
    </div>
  );
}

export default RecruitmentPipeline;
