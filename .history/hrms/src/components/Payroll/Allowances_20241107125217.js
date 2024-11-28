import React, { useState,useRef, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./Allowances.css";
import {
  FaSearch,
  FaList,
  FaTh,
  FaFilter,
  FaPlus,
  FaEdit,
  FaTrash,
  FaInfoCircle
} from "react-icons/fa";

const allowancesData = [
  {
    id: 1,
    code: "TA",
    name: "Travel Allowance",
    amount: 200.0,
    oneTime: "No",
    taxable: "Yes",
    fixed: false,
  },
  {
    id: 2,
    code: "HA",
    name: "House Rent Allowance",
    amount: 1000.0,
    oneTime: "No",
    taxable: "Yes",
    fixed: true,
  },
  {
    id: 3,
    code: "DA",
    name: " Dearness Allowance",
    amount: 1500.0,
    oneTime: "No",
    taxable: "Yes",
    fixed: true,
  },
  // Add more allowance data here
];

const Allowances = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("card"); // 'card' or 'list'
  const [filteredData, setFilteredData] = useState(allowancesData);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    taxable: "",
    condition: "",
    base: "",
  });

  const [allowances, setAllowances] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    oneTimeDate: null,
    includeAllActive: false,
    specificDetails: "",
    isTaxable: false,
    isConditionBased: false,
    isFixed: false,
    amount: "",
    ifChoice: "",
    ifCondition: "",
    ifAmount: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      oneTimeDate: date,
    }));
  };

  const handleCreateAllowance = (e) => {
    e.preventDefault();
    setAllowances([...allowances, formValues]);
    setFormValues({
      title: "",
      oneTimeDate: null,
      includeAllActive: false,
      specificDetails: "",
      isTaxable: false,
      isConditionBased: false,
      isFixed: false,
      amount: "",
      ifChoice: "",
      ifCondition: "",
      ifAmount: "",
    });
    setIsCreating(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === "") {
      setFilteredData(allowancesData);
    } else {
      const filtered = allowancesData.filter((allowance) =>
        allowance.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleEdit = (id) => {
    alert(`Edit allowance with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete allowance with ID: ${id}`);
  };


  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilter = () => {
    let filtered = allowancesData;

     // Filter based on taxable
    if (filterOptions.taxable) {
      filtered = filtered.filter((allowance) => allowance.taxable === filterOptions.taxable);
    }

    // Filter based on condition (Fixed/Non-Fixed)

    if (filterOptions.condition) {
      filtered = filtered.filter((allowance) => (filterOptions.condition === "Fixed" ? allowance.fixed : !allowance.fixed));
    }

     // Apply the filtered data
    setFilteredData(filtered);
  };

  const getActiveFilters = () => {
    let activeFilters = [];
    if (filterOptions.taxable) {
      activeFilters.push(`Taxable: ${filterOptions.taxable}`);
    }
    if (filterOptions.condition) {
      activeFilters.push(`Condition: ${filterOptions.condition}`);
    }
    if (filterOptions.base) {
      activeFilters.push(`Base: ${filterOptions.base}`);
    }
    return activeFilters;
  };

  const removeFilter = (filter) => {
    if (filter.includes("Taxable")) {
      setFilterOptions((prev) => ({ ...prev, taxable: "" }));
    } else if (filter.includes("Condition")) {
      setFilterOptions((prev) => ({ ...prev, condition: "" }));
    } else if (filter.includes("Base")) {
      setFilterOptions((prev) => ({ ...prev, base: "" }));
    }
  };


  return (
    <div className="allowances-container">
      <header className="allowances-header">
        <h2>Allowances</h2>
        <div className="controls">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button
            className={`view-toggle ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
          >
            <FaList />
          </button>
          <button
            className={`view-toggle ${view === "card" ? "active" : ""}`}
            onClick={() => setView("card")}
          >
            <FaTh />
          </button>
          <button className="filter-btn" onClick={toggleFilterVisibility}>
            <FaFilter /> Filter
          </button>
          <button className="create-btn" onClick={() => setIsCreating(true)}> 
            <FaPlus /> Create
          </button>
        </div>
      </header>
                  {/* Creating account */}
      {isCreating && (
        <div className="create-allowance-form">
          <h3>Allowance Details</h3>
          <form onSubmit={handleCreateAllowance}>
            {/* Title */}
            <div className="form-row">
              <label>
                Title <span className="required">*</span>
                <FaInfoCircle title="Title of the allowance" className="info-icon" />
              </label>
              <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* One Time Date */}
            <div className="form-row">
              <label>
                One Time Date <span className="required">*</span>
                <FaInfoCircle
                  title="The one-time allowance will apply if the date is within the payslip period."
                  className="info-icon"
                />
              </label>
              <DatePicker
                selected={formValues.oneTimeDate}
                onChange={handleDateChange}
                className="date-picker"
                placeholderText="Select Date"
                required
              />
            </div>

            {/* Include All Active Employees */}
            <div className="form-row">
              <label>
                Include All Active Employees
                <FaInfoCircle
                  title="Target allowance to all active employees in the company."
                  className="info-icon"
                />
              </label>
              <input
                type="checkbox"
                name="includeAllActive"
                checked={formValues.includeAllActive}
                onChange={handleInputChange}
              />
            </div>

            {/* Specific Details */}
            <div className="form-row">
              <label>Specific Details</label>
              <input
                type="text"
                name="specificDetails"
                value={formValues.specificDetails}
                onChange={handleInputChange}
                placeholder="Employee Details"
              />
              <button className="filter-btn">
                <FaFilter /> Filter
              </button>
            </div>

            {/* Is Taxable */}
            <div className="form-row">
              <label>
                Is Taxable <span className="required">*</span>
                <FaInfoCircle title="Used to calculate taxable allowances." className="info-icon" />
              </label>
              <input
                type="checkbox"
                name="isTaxable"
                checked={formValues.isTaxable}
                onChange={handleInputChange}
              />
            </div>

            {/* Is Condition Based */}
            <div className="form-row">
              <label>Is Condition Based</label>
              <input
                type="checkbox"
                name="isConditionBased"
                checked={formValues.isConditionBased}
                onChange={handleInputChange}
              />
            </div>

            {/* Is Fixed */}
            <div className="form-row">
              <label>
                Is Fixed <span className="required">*</span>
                <FaInfoCircle title="Specify if the allowance is fixed." className="info-icon" />
              </label>
              <input
                type="checkbox"
                name="isFixed"
                checked={formValues.isFixed}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="amount"
                value={formValues.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                required
              />
            </div>

            {/* If Choice */}
            <div className="form-row">
              <label>
                If Choice <span className="required">*</span>
                <FaInfoCircle title="Pay head for the condition." className="info-icon" />
              </label>
              <input
                type="text"
                name="ifChoice"
                value={formValues.ifChoice}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* If Condition */}
            <div className="form-row">
              <label>
                If Condition <span className="required">*</span>
                <FaInfoCircle title="Apply if conditions satisfy." className="info-icon" />
              </label>
              <select
                name="ifCondition"
                value={formValues.ifCondition}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Condition</option>
                <option value="equal">is equal to</option>
                <option value="greater">greater than</option>
                <option value="less">less than</option>
              </select>
            </div>

            {/* If Amount */}
            <div className="form-row">
              <label>
                If Amount <span className="required">*</span>
                <FaInfoCircle title="Amount for the condition." className="info-icon" />
              </label>
              <input
                type="number"
                name="ifAmount"
                value={formValues.ifAmount}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Save Button */}
            <button type="submit" className="save-btn">Save</button>
          </form>
        </div>
      )}

      {/* Allowances List */}
      <div className="allowances-list">
        {allowances.map((allowance, index) => (
          <div key={index} className="allowance-item">
            <h4>{allowance.title}</h4>
            <p>One-Time Date: {allowance.oneTimeDate?.toLocaleDateString() || "N/A"}</p>
            <p>Amount: {allowance.amount}</p>
            <p>Is Taxable: {allowance.isTaxable ? "Yes" : "No"}</p>
            <p>Is Fixed: {allowance.isFixed ? "Yes" : "No"}</p>
          </div>
        ))}
        </div>

       {/* Display active filters as tags */}
       <div className="active-filters">
        {getActiveFilters().map((filter, index) => (
          <span key={index} className="filter-tag">
            {filter} <button onClick={() => removeFilter(filter)}>x</button>
          </span>
        ))}
      </div>

      {isFilterVisible && (
        <div className="filter-popup" ref={filterRef}>
          <div className="filter-form">
            <div className="filter-row">
              <label>Taxable</label>
              <select
                name="taxable"
                onChange={handleFilterChange}
                value={filterOptions.taxable}
              >
                <option value="">Select Taxable</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="filter-row">
              <label>Condition</label>
              <select
                name="condition"
                onChange={handleFilterChange}
                value={filterOptions.condition}
              >
                <option value="">Select Condition</option>
                <option value="Fixed">Fixed</option>
                <option value="Non-Fixed">Non-Fixed</option>
              </select>
            </div>
            <div className="filter-row">
              <label>Base</label>
              <select
                name="base"
                onChange={handleFilterChange}
                value={filterOptions.base}
              >
                <option value="">Select Base</option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <button onClick={applyFilter}>Apply Filter</button>
          </div>
        </div>
      )}



      <div className="status-indicators">
        <span className="dot not-fixed">Not Fixed</span>
        <span className="dot fixed">Fixed</span>
        <span className="dot non-taxable">Non Taxable</span>
        <span className="dot taxable">Taxable</span>
      </div>

      {view === "card" ? (
        <div className="card-view">
          {filteredData.map((allowance) => (
            <div className="allowance-card" key={allowance.id}>
              <div className="card-icon">{allowance.code}</div>
              <div className="card-content">
                <h3>{allowance.name}</h3>
                <p>Amount: {allowance.amount}</p>
                <p>One Time Allowance: {allowance.oneTime}</p>
                <p>Taxable: {allowance.taxable}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="list-view">
           <div className="table-container">
          <table>
            <thead>
              <tr>
              <th className="sticky-column">Allowance</th>
                  <th className="scrollable-column">Specific Employees</th>
                  <th className="scrollable-column">Excluded Employees</th>
                  <th className="scrollable-column">Is Taxable</th>
                  <th className="scrollable-column">Is Condition Based</th>
                  <th className="scrollable-column">Condition</th>
                  <th className="scrollable-column">Is Fixed</th>
                  <th className="scrollable-column">Amount</th>
                  <th className="scrollable-column">Based On</th>
                  <th className="scrollable-column">Rate</th>
                  <th className="sticky-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((allowance) => (
                <tr key={allowance.id}>
                  <td className="sticky-column">{allowance.name}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{allowance.taxable}</td>
                  <td>No</td>
                  <td>-</td>
                  <td>{allowance.fixed ? "Yes" : "No"}</td>
                  <td>{allowance.amount}</td>
                  <td>-</td>
                  <td>-</td>
                  <td className="sticky-column">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(allowance.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(allowance.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}

      <footer className="footer">
        <span>Page 1 of 1</span>
        <button className="add-btn">
          <FaPlus />
        </button>
      </footer>
    </div>
  );
};

export default Allowances;
