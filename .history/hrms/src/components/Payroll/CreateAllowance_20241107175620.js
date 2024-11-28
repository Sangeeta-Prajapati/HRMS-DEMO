import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import "./CreateAllowance.css";

const CreateAllowance = () => {
  const [isTaxable, setIsTaxable] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isConditionBased, setIsConditionBased] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterText, setFilterText] = useState(""); // State for filtering input


   // Sample employee data
   const employees = [
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "Product Manager" },
    { id: 3, name: "Mark Johnson", role: "Designer" },
    { id: 4, name: "Alice Brown", role: "HR Manager" },
  ];

    // Filter employees based on the input text
    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
        employee.role.toLowerCase().includes(filterText.toLowerCase())
      );
    
      const handleEmployeeSelect = (employee) => {
        setSelectedEmployee(employee);
        setIsModalOpen(false);
      };
    
      const handleFilterClick = () => {
        setIsModalOpen(true);
      };
      
  return (
    <div className="main-container">
      <div className="create-allowance-container">
        <h2>Allowance</h2>
        <hr />

        <form>
          {/* Title and One-time date in one row */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Title <span>*</span>
                <FaInfoCircle
                  className="info-icon"
                  title="Title of the allowance"
                />
              </label>
              <input type="text" placeholder="Enter title" required />
            </div>
            <div className="form-group">
              <label>
                One-time date
                <FaInfoCircle
                  className="info-icon"
                  title="The one-time allowance will apply to payslips if the date is within the payslip period"
                />
              </label>
              <input type="date" />
            </div>
          </div>

          {/* Include all active employees and Specific Employees */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Include all active employees
                <FaInfoCircle
                  className="info-icon"
                  title="Target allowance to all active employees in the company"
                />
              </label>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

             

              <select>
                {/* Specific Employees Section */}
             <div className="form-row">
            <div className="form-group">
              <label>Specific Employees *</label>
              <div className="employee-container">
                    <div className="employee-info">
                    {selectedEmployee ? (
                    <>
                      <p>{selectedEmployee.name}</p>
                      <p>{selectedEmployee.role}</p>
                    </>
                  ) : (
                    <p>No employee selected</p>
                  )}
                    </div>

                </div>
                </div>
                <option>Select specific employees</option>
                
              </select>
              <div className="filter-icons" onClick={handleFilterClick}>
                {[...Array(1)].map((_, i) => (
                  <IoFilterOutline key={i} className="small-filter-icon" />
                ))}{" "}
                <span className="filter-span">Filter</span>
              </div>
            </div>
          </div>
          

          {/* Is taxable and Is condition based */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Is taxable
                <FaInfoCircle
                  className="info-icon"
                  title="This field is used to calculate taxable allowances"
                />
              </label>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isTaxable}
                  onChange={() => setIsTaxable(!isTaxable)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="form-group">
              <label>
                Is condition based
                <FaInfoCircle
                  className="info-icon"
                  title="The filled is used to target allowance to the specific employees when the conditions satisfied with the employees information"
                />
              </label>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isConditionBased}
                  onChange={() => setIsConditionBased(!isConditionBased)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Is fixed and Amount */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Is fixed
                <FaInfoCircle
                  className="info-icon"
                  title="Specify if the allowance is fixed or not"
                />
              </label>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isFixed}
                  onChange={() => setIsFixed(!isFixed)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input type="number"  placeholder="Enter amount" required className="input"/>
            </div>
          </div>

          {/* If choice and If condition */}
          <div className="form-row">
            <div className="form-group">
              <label>
                If choice <span>*</span>
                <FaInfoCircle
                  className="info-icon"
                  title="The pay head for the if condition"
                />
              </label>
              <select required>
                <option>Basic Pay</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                If condition <span>*</span>
                <FaInfoCircle
                  className="info-icon"
                  title="Apply if the pay-head conditions satisfy"
                />
              </label>
              <select required className="condition-options">
                <option >Equal (==)</option>
                <option>Not Equal (!=)</option>
                <option>Greater Than({">"})</option>
                <option>Less Than or Equal To ({"<="})</option>
                <option>Less Than or Equal To ({">="})</option>
              </select>
            </div>
          </div>

          {/* If amount and Save button */}
          <div className="form-row">
            <div className="form-group half-width">
              <label>
                If amount <span>*</span>
                <FaInfoCircle
                  className="info-icon"
                  title="The amount of the pay-head"
                />
              </label>
              <input type="number" placeholder="0.0" required />
            </div>
            <div className="form-group save-btn-container">
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </div>
        </form>


         {/* Modal for Employee Selection */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Employee</h3>
            <input
              type="text"
              placeholder="Search employee..."
              className="search-input"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)} // Set filter text on input change
            />
            <ul className="employee-list">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <li key={employee.id} onClick={() => handleEmployeeSelect(employee)}>
                    {employee.name} - {employee.role}
                  </li>
                ))
              ) : (
                <li>No employees found</li>
              )}
            </ul>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}


      </div>
    </div>
  );
};

export default CreateAllowance;
