import React, { useState } from 'react';
import { FaInfoCircle, FaFilter } from 'react-icons/fa';
import { IoFilterOutline } from "react-icons/io5";
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
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="form-group">
            <label>Specific Employees *</label>
            <select>
              <option>Select specific employees</option>
            </select>
            <div className="filter-icons">
              {[...Array(1)].map((_, i) => (
                <IoFilterOutline   key={i} className="small-filter-icon"  />
              ))} <span>Filter</span>
            </div>
          </div>
        </div>

        {/* Is taxable and Is condition based */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Is taxable
              <FaInfoCircle className="info-icon" title="This field is used to calculate taxable allowances" />
            </label>
            <label className="toggle-switch">
              <input type="checkbox" checked={isTaxable} onChange={() => setIsTaxable(!isTaxable)} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="form-group">
            <label>Is condition based</label>
            <label className="toggle-switch">
              <input type="checkbox" checked={isConditionBased} onChange={() => setIsConditionBased(!isConditionBased)} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Is fixed and Amount */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Is fixed
              <FaInfoCircle className="info-icon" title="Specify if the allowance is fixed or not" />
            </label>
            <label className="toggle-switch">
              <input type="checkbox" checked={isFixed} onChange={() => setIsFixed(!isFixed)} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" placeholder="Enter amount" required />
          </div>
        </div>

        {/* If choice and If condition */}
        <div className="form-row">
          <div className="form-group">
            <label>
              If choice <span>*</span>
              <FaInfoCircle className="info-icon" title="The pay head for the if condition" />
            </label>
            <select required>
              <option>Basic Pay</option>
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
        </div>

        {/* If amount and Save button */}
        <div className="form-row">
          <div className="form-group half-width">
            <label>
              If amount <span>*</span>
              <FaInfoCircle className="info-icon" title="The amount of the pay-head" />
            </label>
            <input type="number" placeholder="0.0" required />
          </div>
          <div className="form-group save-btn-container">
            <button type="submit" className="save-btn">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAllowance;
