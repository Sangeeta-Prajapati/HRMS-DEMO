import React, { useState } from "react";
import "./ResignationPage.css";

const ResignationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid"); // "grid" or "list"
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleView = (viewType) => {
    setView(viewType);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="resignation-page">
      <div className="header">
        <h2 className="heading">Resignations</h2>
        <div className="header-right">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button onClick={() => toggleView("list")} className="icon-button">
            📋
          </button>
          <button onClick={() => toggleView("grid")} className="icon-button">
            🔲
          </button>
          <button onClick={toggleFilter} className="icon-button">
            ⚙️ Filter
          </button>
          <button className="create-button">+ Create</button>
        </div>
      </div>

      {filterOpen && (
        <div className="filter-popup">
          <p>Filter options will go here</p>
        </div>
      )}

      <div className={`resignation-content ${view}`}>
        {/* Render grid or list items here based on view */}
        {/* Example card layout for grid view */}
        <div className="resignation-card">
          <div className="card-header">
            <span className="status approved">Approved</span>
            <div className="card-actions">
              <button className="icon-button">✏️</button>
              <button className="icon-button">🗑️</button>
            </div>
          </div>
          <div className="card-body">
            <h3>Employee Name</h3>
            <p>Position</p>
            <p>Department</p>
          </div>
          <div className="card-footer">
            <button className="approve-button">✔️</button>
            <button className="reject-button">❌</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResignationPage;
