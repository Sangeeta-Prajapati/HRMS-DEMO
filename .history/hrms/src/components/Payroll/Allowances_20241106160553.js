import React, { useState } from 'react';
import './Allowances.css';
import { FaSearch, FaList, FaTh, FaFilter, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const allowancesData = [
  { id: 1, code: 'TA', name: 'Travel Allowance', amount: 200.0, oneTime: 'No', taxable: 'Yes', fixed: false },
  { id: 2, code: 'HA', name: 'House Rent Allowance', amount: 1000.0, oneTime: 'No', taxable: 'Yes', fixed: true },
  // Add more allowance data here
];

const Allowances = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('card'); // 'card' or 'list'
  const [filteredData, setFilteredData] = useState(allowancesData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === '') {
      setFilteredData(allowancesData);
    } else {
      const filtered = allowancesData.filter((allowance) =>
        allowance.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
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
          <button className={`view-toggle ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
            <FaList />
          </button>
          <button className={`view-toggle ${view === 'card' ? 'active' : ''}`} onClick={() => setView('card')}>
            <FaTh />
          </button>
          <button className="filter-btn">
            <FaFilter /> Filter
          </button>
          <button className="create-btn">
            <FaPlus /> Create
          </button>
        </div>
      </header>
      
      <div className="status-indicators">
        <span className="dot not-fixed">Not Fixed</span>
        <span className="dot fixed">Fixed</span>
        <span className="dot non-taxable">Non Taxable</span>
        <span className="dot taxable">Taxable</span>
      </div>

      {view === 'card' ? (
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
          <table>
            <thead>
              <tr>
                <th>Allowance</th>
                <th>Specific Employees</th>
                <th>Excluded Employees</th>
                <th>Is Taxable</th>
                <th>Is Condition Based</th>
                <th>Condition</th>
                <th>Is Fixed</th>
                <th>Amount</th>
                <th>Based On</th>
                <th>Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((allowance) => (
                <tr key={allowance.id}>
                  <td>{allowance.name}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{allowance.taxable}</td>
                  <td>No</td>
                  <td>-</td>
                  <td>{allowance.fixed ? 'Yes' : 'No'}</td>
                  <td>{allowance.amount}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <button className="edit-btn"><FaEdit /></button>
                    <button className="delete-btn"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
