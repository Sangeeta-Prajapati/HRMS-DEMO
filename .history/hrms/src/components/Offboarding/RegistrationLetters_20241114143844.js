import React, { useState } from "react";
import "./ResignationLetters.css";

const ResignationLetters = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="resignation-letters">
      <div className="header">
        <div className="header-left">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button onClick={() => handleViewChange("list")} className="view-btn">List View</button>
          <button onClick={() => handleViewChange("grid")} className="view-btn">Grid View</button>
          <button className="filter-btn">Filter</button>
          <button className="create-btn">+ Create</button>
        </div>
        <h1 className="header-title">Resignations</h1>
      </div>

      <div className={viewMode === "grid" ? "card-grid" : "card-list"}>
        {/* Render resignation cards here */}
      </div>
    </div>
  );
};

export default ResignationLetters;
