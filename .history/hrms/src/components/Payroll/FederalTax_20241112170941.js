import React, { useState } from 'react';
import './FederalTAx.css';
import { FaMinus, FaPlus, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';

const FederalTax = () => {
    const [showTable, setShowTable] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleTableVisibility = () => {
        setShowTable(!showTable);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.taxRate.toString().includes(searchTerm) ||
        item.minIncome.toString().includes(searchTerm) ||
        item.maxIncome.toString().includes(searchTerm)
    );

    const data = [
        { id: 1, taxRate: "45.00%", minIncome: "ETB 1500.00", maxIncome: "ETB 4000.00" },
        { id: 2, taxRate: "1.00%", minIncome: "ETB 13000.00", maxIncome: "ETB 500000.00" },
    ];

    return (
        <div className="filing-status">
            <div className="header">
                <h2>Filing Status</h2>
                <div className="actions">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button className="create-button">
                        <FaPlusCircle /> Create
                    </button>
                </div>
                <button onClick={toggleTableVisibility} className="toggle-button">
                    {showTable ? <FaMinus /> : <FaPlus />}
                </button>
            </div>
            {showTable && (
                <table className="filing-table">
                    <thead>
                        <tr>
                            <th>Tax Rate</th>
                            <th>Min. Income</th>
                            <th>Max. Income</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.taxRate}</td>
                                <td>{item.minIncome}</td>
                                <td>{item.maxIncome}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="edit-button"><FaEdit /></button>
                                        <button className="delete-button"><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FederalTax;
