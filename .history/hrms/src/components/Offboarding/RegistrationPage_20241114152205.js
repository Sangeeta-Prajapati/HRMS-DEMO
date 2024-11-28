import React, { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import "./ResignationPage.css";

const ResignationPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Priyanka Dutta",
      department: "S/W Dept / React Dev",
      status: "Approved",
      title: "Resign letter",
      description: "Test",
    },
    // Add more items as per your data
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="resignation-letters">
      <div className="header">
        <h1>Resignations</h1>
        
        <div className="controls">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className = "view-toggle" onClick={() => handleViewChange("list")}><FaList /></button>
        <button className = "view-toggle" onClick={() => handleViewChange("grid")}><FaTh/></button>
      
          <button className="filter-btn">Filter</button>
          <button className="create-btn"> Create</button>
        
      </div>
      </div>

  

      <div className={viewMode === "grid" ? "card-grid" : "card-list"}>
        {filteredData.map((item) => (
          <div key={item.id} className="resignation-card">
            <div className="card-header">
              <span className="status">{item.status}</span>
              <div className="card-icons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div className="card-content">
              <h2>{item.name}</h2>
              <p>{item.department}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="card-footer">
              <button className="approve-btn">✔</button>
              <button className="reject-btn">✘</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResignationPage;
