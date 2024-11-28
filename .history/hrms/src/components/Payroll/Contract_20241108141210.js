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
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

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

  const handleEdit = (contract) => {
    setEditingId(contract.id);
    setEditedData(contract);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    setContracts(
      contracts.map((contract) =>
        contract.id === editingId ? editedData : contract
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setContracts(contracts.filter((contract) => contract.id !== id));
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
              <td>{editingId === contract.id ? (
                <input
                  type="text"
                  name="contract"
                  value={editedData.contract}
                  onChange={handleChange}
                />
              ) : (
                contract.contract
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="text"
                  name="employee"
                  value={editedData.employee}
                  onChange={handleChange}
                />
              ) : (
                contract.employee
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="date"
                  name="startDate"
                  value={editedData.startDate}
                  onChange={handleChange}
                />
              ) : (
                contract.startDate
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="date"
                  name="endDate"
                  value={editedData.endDate}
                  onChange={handleChange}
                />
              ) : (
                contract.endDate
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="text"
                  name="wageType"
                  value={editedData.wageType}
                  onChange={handleChange}
                />
              ) : (
                contract.wageType
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="number"
                  name="basicSalary"
                  value={editedData.basicSalary}
                  onChange={handleChange}
                />
              ) : (
                contract.basicSalary
              )}</td>
              <td>{editingId === contract.id ? (
                <input
                  type="text"
                  name="filingStatus"
                  value={editedData.filingStatus}
                  onChange={handleChange}
                />
              ) : (
                contract.filingStatus
              )}</td>
              <td>
                {editingId === contract.id ? (
                  <button className="table-action-button" onClick={handleSave}>Save</button>
                ) : (
                  <button className="table-action-button" onClick={() => handleEdit(contract)}>Edit</button>
                )}
                <button
                  className="table-action-button"
                  onClick={() => handleDelete(contract.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contract;
