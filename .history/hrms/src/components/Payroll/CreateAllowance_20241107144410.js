import React, { useState } from 'react';
import { FaInfoCircle, FaFilter } from 'react-icons/fa';
import './CreateAllowance.css';

const CreateAllowance = () => {
  const [isTaxable, setIsTaxable] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isConditionBased, setIsConditionBased] = useState(false);

  return (
    <div className="create-allowance-container">
      <h2>Allowance</h2>
      
      <form>
        {/* Title and One-time date in one row */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Title <span>*</span>
              <FaInfoCircle className="info-icon" title="Title of the allowance" />
            </label>
            <input type="text" placeholder="Enter title" required />
          </div>
          <div className="form-group">
            <label>
              One-time date
              <FaInfoCircle className="info-icon" title="The one-time allowance will apply to payslips if the date is within the payslip period" />
            </label>
            <input type="date" />
          </div>
        </div>

        {/* Include all active employees and Specific Employees */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Include all active employees
              <FaInfoCircle className="info-icon" title="Target allowance to all active employees in the company" />
            </label>
            <input type="checkbox" />
          </div>
          <div className="form-group">
            <label>Specific Employees *</label>
            <select>
              <option>Select specific employees</option>
              {/* Options would be dynamically added here */}
            </select>
            <button className="filter-btn">Filter</button>
            <div className="filter-icons">
              {[...Array(5)].map((_, i) => (
                <FaFilter key={i} className="small-filter-icon" />
              ))}
            </div>
          </div>
        </div>

        {/* Is taxable and Is condition based with toggle buttons below */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Is taxable
              <FaInfoCircle className="info-icon" title="This field is used to calculate taxable allowances" />
            </label>
            <input
              type="checkbox"
              checked={isTaxable}
              onChange={() => setIsTaxable(!isTaxable)}
            />
          </div>
          <div className="form-group">
            <label>Is condition based</label>
            <input
              type="checkbox"
              checked={isConditionBased}
              onChange={() => setIsConditionBased(!isConditionBased)}
            />
          </div>
        </div>

        {/* Is fixed and Amount in one row */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Is fixed
              <FaInfoCircle className="info-icon" title="Specify if the allowance is fixed or not" />
            </label>
            <input
              type="checkbox"
              checked={isFixed}
              onChange={() => setIsFixed(!isFixed)}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" placeholder="Enter amount" required />
          </div>
        </div>

        {/* If choice, If condition, and If amount in one row */}
        <div className="form-row">
          <div className="form-group">
            <label>
              If choice <span>*</span>
              <FaInfoCircle className="info-icon" title="The pay head for the if condition" />
            </label>
            <select required>
              <option>Basic Pay</option>
              {/* Additional options */}
            </select>
          </div>
          <div className="form-group">
            <label>
              If condition <span>*</span>
              <FaInfoCircle className="info-icon" title="Apply if the pay-head conditions satisfy" />
            </label>
            <select required>
              <option>Greater Than</option>
              <option>Less Than</option>
              <option>Equal To</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              If amount <span>*</span>
              <FaInfoCircle className="info-icon" title="The amount of the pay-head" />
            </label>
            <input type="number" placeholder="0.0" required />
          </div>
        </div>

        {/* Save button */}
        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
};

export default CreateAllowance;
