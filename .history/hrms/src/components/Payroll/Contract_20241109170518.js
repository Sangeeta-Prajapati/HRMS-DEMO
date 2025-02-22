import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaSortUp,
  FaSortDown,
  FaInfoCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import "./Contract.css";

const Contract = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    {
      id: 2,
      contract: "Part-time",
      employee: "Jane Smith",
      startDate: "2021-06-19",
      endDate: "2023-01-21",
      wageType: "Hourly",
      basicSalary: 5000,
      filingStatus: "Filed",
    },
    {
      id: 3,
      contract: "Full-time",
      employee: "Mark Johnson",
      startDate: "2020-10-21",
      endDate: "2025-11-11",
      wageType: "Semi-Monthly",
      basicSalary: 5000,
      filingStatus: "Filed",
    },
    // Add more contract data as needed
  ]);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [showCreatePage, setShowCreatePage] = useState(false);
  const [formData, setFormData] = useState({
    contractStatus: "",
    contractTitle: "",
    employee: "",
    startDate: "",
    endDate: "",
    wageType: "",
    payFrequency: "",
    basicSalary: "",
    filingStatus: "",
    department: "",
    jobOption: "",
    jobPosition: "",
    shift: "",
    workType: "",
    noticePeriod: "",
    contractDocument: null,
    deductFromBasicPay: false,
    calculateDailyLeave: false,
    note: "",
  });

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filterData, setFilterData] = useState({
    employeeName: "",
    contractStatus: "",
    startDate: "",
    endDate: "",
  });
  

  const handleCreateClick = () => {
    setShowCreatePage(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSaveCreate = () => {
    const newContract = {
      id: contracts.length + 1,
      contract: formData.contractStatus,
      employee: formData.employee,
      startDate: formData.startDate,
      endDate: formData.endDate,
      wageType: formData.wageType,
      basicSalary: formData.basicSalary,
      filingStatus: formData.filingStatus,
    };

    setContracts([...contracts, newContract]);
    setFormData({
      contractStatus: "",
      contractTitle: "",
      employee: "",
      startDate: "",
      endDate: "",
      wageType: "",
      basicSalary: "",
      filingStatus: "",
    });
    setShowCreatePage(false);
  };

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
  const handleDelete = (id) => {
    setContracts(contracts.filter((contract) => contract.id !== id));
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

  if (showCreatePage) {
    return (
      <div className="create-page">
        <div className="create-page-sub-container">
          <div className="contract-row">
            <h2 className="contract-heading">Contract</h2>
            <select
              className="contract-status"
              onChange={handleInputChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
              <option value="Expire">Expire</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>

          <hr className="line" />
          <form className="create-form">
            <div className="form-row">
              <div className="form-group">
                <label>
                  Contract <span className="required">*</span>
                  <FaInfoCircle
                    title="Contract information"
                    className="info-icon"
                  />
                </label>
                <input
                  type="text"
                  name="contractTitle"
                  value={formData.contractTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Employee <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="employee"
                  value={formData.employee}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Contract Start Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contract End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Wage Type <span className="required">*</span>
                </label>
                <select name="wageType" onChange={handleInputChange} required>
                  <option value="">Select Wage Type</option>
                  <option value="Daily">Daily</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Hourly">Hourly</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Pay Frequency <span className="required">*</span>
                </label>
                <select
                  name="payFrequency"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Semi-Monthly">Semi-Monthly</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Basic Salary <span className="required">*</span>
                </label>
                <input
                  type="number"
                  name="basicSalary"
                  value={formData.basicSalary}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Filing Status</label>
                <input
                  type="text"
                  name="filingStatus"
                  value={formData.filingStatus}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Department</label>
                <select name="department" onChange={handleInputChange}>
                  <option value="">Select Department</option>
                  <option value="HR Dept">HR Dept</option>
                  <option value="Sales Dept">Sales Dept</option>
                  <option value="S/W Dept">S/W Dept</option>
                  <option value="Marketing Dept">Marketing Dept</option>
                  <option value="Finance Dept">Finance Dept</option>
                  <option value="IT Dept">IT Dept</option>
                </select>
              </div>
              <div className="form-group">
                <label>Job Position</label>
                <select name="position" onChange={handleInputChange}>
                  <option value="">Select Position</option>
                  <option value="HR Dept">HR Dept</option>
                  <option value="Sales Dept">
                    {"Sales Man- (Sales Dept)"}
                  </option>
                  <option value="S/W Dept">{"Django Dev- (S/W Dept)"}</option>
                  <option value="Marketing Dept">
                    {"Digital Marketig Specialist - (Marketing Dept)"}
                  </option>
                  <option value="Finance Dept">
                    {"Accountant - (Finance Dept)"}
                  </option>
                  <option value="IT Dept">
                    {"Software Engineer- (IT Dept)"}
                  </option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Job Role</label>
                <select name="role" onChange={handleInputChange}>
                  <option value="">Select Position</option>
                  <option value="HR Dept">Intern - Recuriter</option>
                  <option value="Sales Dept">Intern - Sales Man</option>
                  <option value="S/W Dept">Jnr Dev - Odoo Dev </option>
                  <option value="Marketing Dept">
                    Marketig Manager - Marketing Dept
                  </option>
                  <option value="Finance Dept">Billing - Finance Dept</option>
                  <option value="IT Dept">React Developer- IT Dept</option>
                </select>
              </div>
              <div className="form-group">
                <label>Shift</label>
                <select name="shift" onChange={handleInputChange}>
                  <option value="">Select Shift</option>
                  <option value="Regular">Regular</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="Morning Shift">Morning Shift</option>
                  <option value="Second Shift">Second Shift</option>
                  <option value="Third Shift">Third Shift</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Work Type</label>
                <select name="workType" onChange={handleInputChange}>
                  <option value="">Select Work Type</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Notice Period <span className="required">*</span>
                  <FaInfoCircle
                    className="info-icon"
                    title="Notice period in total days"
                  />
                </label>
                <input
                  type="number"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row half-width">
              <div className="form-group">
                <label>
                  Deduct from Basic Pay
                  <FaInfoCircle
                    className="info-icon"
                    title="Deduct the leave amount from basic pay"
                  />
                </label>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    name="deductFromBasicPay"
                    checked={formData.deductFromBasicPay}
                    onChange={handleInputChange}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="form-group">
                <label>
                  Calculate Daily Leave Amount
                  <FaInfoCircle
                    title="Leave amount will be calculated by dividing basic pay by working days"
                    className="info-icon"
                  />
                </label>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    name="calculateDailyLeave"
                    checked={formData.calculateDailyLeave}
                    onChange={handleInputChange}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Contract Document</label>
              <input
                type="file"
                name="contractDocument"
                onChange={handleInputChange}
              />
            </div>
            <hr/>

            <div className="form-group full-width">
              <label>Note</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-row">
              <button
                type="button"
                className="save-button"
                onClick={handleSaveCreate}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContracts = contracts.filter((contract) =>
    contract.employee.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleFilterIconClick = () => {
    setShowFilterPopup(true);
  };

  const handleFilterClose = () => {
    setShowFilterPopup(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };


  return (
    <div className="contract-page">
      {/* Header */}
      <div className="header-container">
        <h2 className="header-title">CONTRACT</h2>
        <div className="header-right">
          <div className="search-bar">
            <FaSearch/>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}
            style={{border : "none"}}
            />
          </div>
          <FaFilter className="header-icon" title="Filter" onClick={toggleFilterPopup}/>
          <IoIosOptions className="header-icon" title="Group by" />
          <button className="action-button">Actions</button>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
        </div>
      </div>

      {showFilterPopup && (
        <div className="filter-popup">
          <div className="filter-popup-content">
            <h3>Filter Contracts</h3>
            <label>
              Employee Name:
              <input
                type="text"
                name="employeeName"
                value={filterData.employeeName}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Contract Status:
              <select
                name="contractStatus"
                value={filterData.contractStatus}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </label>
            <button className="apply-button" onClick={applyFilter}>
              Apply
            </button>
            <button className="close-button" onClick={toggleFilterPopup}>
              Close
            </button>
          </div>
        </div>
      )}


      {/* Table */}
      <table className="contract-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Contract</th>
            <th onClick={() => handleSort("employee")}>
              Employee{" "}
              {sortConfig.key === "employee" ? (
                sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )
              ) : null}
            </th>
            <th onClick={() => handleSort("startDate")}>
              Start Date{" "}
              {sortConfig.key === "startDate" ? (
                sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )
              ) : null}
            </th>
            <th onClick={() => handleSort("endDate")}>
              End Date{" "}
              {sortConfig.key === "endDate" ? (
                sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )
              ) : null}
            </th>
            <th>Wage Type</th>
            <th onClick={() => handleSort("basicSalary")}>
              Basic Salary{" "}
              {sortConfig.key === "basicSalary" ? (
                sortConfig.direction === "asc" ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )
              ) : null}
            </th>
            <th>Filing Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map((contract) => (
            <tr key={contract.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="text"
                    name="contract"
                    value={editedData.contract}
                    onChange={handleChange}
                  />
                ) : (
                  contract.contract
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="text"
                    name="employee"
                    value={editedData.employee}
                    onChange={handleChange}
                  />
                ) : (
                  contract.employee
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="date"
                    name="startDate"
                    value={editedData.startDate}
                    onChange={handleChange}
                  />
                ) : (
                  contract.startDate
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="date"
                    name="endDate"
                    value={editedData.endDate}
                    onChange={handleChange}
                  />
                ) : (
                  contract.endDate
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="text"
                    name="wageType"
                    value={editedData.wageType}
                    onChange={handleChange}
                  />
                ) : (
                  contract.wageType
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="number"
                    name="basicSalary"
                    value={editedData.basicSalary}
                    onChange={handleChange}
                  />
                ) : (
                  contract.basicSalary
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <input
                    type="text"
                    name="filingStatus"
                    value={editedData.filingStatus}
                    onChange={handleChange}
                  />
                ) : (
                  contract.filingStatus
                )}
              </td>
              <td>
                {editingId === contract.id ? (
                  <button className="table-action-button" onClick={handleSave}>
                    Save
                  </button>
                ) : (
                  <button
                    className="table-action-button"
                    onClick={() => handleEdit(contract)}
                  >
                    Edit
                  </button>
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
