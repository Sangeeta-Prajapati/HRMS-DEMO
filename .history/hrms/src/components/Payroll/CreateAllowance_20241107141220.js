import React from 'react';
import './CreateAllowance.css';

const CreateAllowance = () => {
  return (
    <div className="create-allowance-container">
      <h2>Allowance Details</h2>
      <form>
        <div className="form-row">
          <label>Title <span>*</span><i className="info-icon" title="Title of the allowance"></i></label>
          <input type="text" required />
        </div>

        <div className="form-row">
          <label>One Time Date <span>*</span><i className="info-icon" title="The one time allowance will apply if the date is within the payslip period"></i></label>
          <input type="date" required />
        </div>

        <div className="form-row">
          <label>Include All Active Employees <i className="info-icon" title="Target allowance to all active employees"></i></label>
          <input type="checkbox" />
        </div>

        <div className="form-row">
          <label>Specific Details</label>
          <button className="filter-btn">Filter</button>
        </div>

        <div className="form-row">
          <label>Is Taxable <span>*</span><i className="info-icon" title="Used to calculate taxable allowances"></i></label>
          <input type="checkbox" />
        </div>

        <div className="form-row">
          <label>Is Condition Based</label>
          <input type="checkbox" />
        </div>

        <div className="form-row">
          <label>Is Fixed <span>*</span><i className="info-icon" title="Specify if the allowance is fixed"></i></label>
          <input type="checkbox" />
        </div>

        <div className="form-row">
          <label>Amount</label>
          <input type="number" />
        </div>

        <div className="form-row">
          <label>If Choice <span>*</span><i className="info-icon" title="The pay head for the 'if' condition"></i></label>
          <input type="text" />
        </div>

        <div className="form-row">
          <label>If Condition <span>*</span><i className="info-icon" title="Apply if the pay-head conditions satisfy"></i></label>
          <select>
            <option>Is Equal To</option>
            <option>Greater Than</option>
            <option>Less Than</option>
          </select>
        </div>

        <div className="form-row">
          <label>If Amount <span>*</span><i className="info-icon" title="The amount of the pay-head"></i></label>
          <input type="number" />
        </div>

        <button type="submit" className="save-btn">Save</button>
      </form>
    </div>
  );
};

export default CreateAllowance;
