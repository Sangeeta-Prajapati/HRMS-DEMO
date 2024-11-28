import React, { useState } from "react";
import { FaSearch, FaFilter, FaSortUp, FaSortDown } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import "./Contract.css";

const Contract = () => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contract: "Full-time",
      employee: "John Doe",
      startDate: "2023-01-01",
      endDate: "2024-01-01",
      wageType: "Monthly",
      basicSalary: 5000,
      filingStatus: "Filed",
    },
    // Add more contract data as needed
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedContracts = [...contracts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setContracts(sortedContracts);
  };

  return (
    <div className="contract-page">
      {/* Header */}
      <div className="header-container">
        <h2 className="header-title">CONTRACT</h2>
        <div className="header-right">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <FaFilter className="header-icon" title="Filter" />
          <IoIosOptions className="header-icon" title="Group by" />
          <button className="action-button">Actions</button>
          <button className="create-button">Create</button>
        </div>
      </div>

      {/* Table */}
      <table className="contract-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Contract</th>
            <th onClick={() => handleSort("employee")}>
              Employee {sortConfig.key === "employee" ? (sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />) : null}
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start Date {sortConfig.key === "startDate" ? (sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />) : null}
            </th>
            <th onClick={() => handleSort("endDate")}>
              End Date {sortConfig.key === "endDate" ? (sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />) : null}
            </th>
            <th>Wage Type</th>
            <th onClick={() => handleSort("basicSalary")}>
              Basic Salary {sortConfig.key === "basicSalary" ? (sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />) : null}
            </th>
            <th>Filing Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{contract.contract}</td>
              <td>{contract.employee}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td>{contract.wageType}</td>
              <td>{contract.basicSalary}</td>
              <td>{contract.filingStatus}</td>
              <td>
                <button className="table-action-button">Edit</button>
                <button className="table-action-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contract;
