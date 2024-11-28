import React, { useState, useEffect } from 'react';
import { FaTrash, FaEnvelope, FaFilter, FaPlus } from 'react-icons/fa';
import './Payslips.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Payslips = ({data} = []) => {
    const [payslips, setPayslips] = useState([
        { id: 1, employee: 'Adam Luis', startDate: '01/11/2024', endDate: '09/11/2024', batch: 'None', grossPay: 'ETB 2394345.33', deduction: 'ETB 166407.00', netPay: 'ETB 2227938.33' },
        { id: 2, employee: 'Sofia Howard (#PEP75)', startDate: '01/05/2021', endDate: '01/12/2024', batch: 'None', grossPay: 'ETB 12378.67', deduction: 'ETB 0.00', netPay: 'ETB 18345.67' },
        { id: 3, employee: 'John Deopha (#PEP45)', startDate: '17/08/2000', endDate: '01/01/2022', batch: 'None', grossPay: 'ETB 145674.77', deduction: 'ETB 0.00', netPay: 'ETB 12345.67' },
        { id: 4, employee: 'Herry Potter (#PEP66)', startDate: '02/02/2016', endDate: '15/05/2021', batch: 'None', grossPay: 'ETB 232133.97', deduction: 'ETB 0.00', netPay: 'ETB 67890.67' },
        // Add more data as needed
    ]);

    const [showFilterModal, setShowFilterModal] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        startDate: '',  //
        endDate: '', //
        status: '',
        batch: '',
        mailSent: '',
        startDateFrom: '',  //
        startDateTill: '',  //
        endDateFrom: '',     //
        endDateTill: '',      // 
        grossPayLessThan: '',
        grossPayGreaterOrEqual: '',
        deductionLessThan: '',
        deductionGreaterOrEqual: '',
        netPayLessThan: '',
        netPayGreaterOrEqual: '',
    });

    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);

    const toggleFilterModal = () => {
        setIsFilterPopupOpen(!isFilterPopupOpen);
    };

    const handleDateChange = (field, date) => {
        setFilterCriteria(prev => ({ ...prev, [field]: date }));
    };

    const [selectedPayslips, setSelectedPayslips] = useState([]);
    const [filterText, setFilterText] = useState('');

    const handleSelectAll = () => {
        if (selectedPayslips.length === payslips.length) {
            setSelectedPayslips([]);
        } else {
            setSelectedPayslips(payslips.map(p => p.id));
        }
    };

    const handleSelect = (id) => {
        if (selectedPayslips.includes(id)) {
            setSelectedPayslips(selectedPayslips.filter(sid => sid !== id));
        } else {
            setSelectedPayslips([...selectedPayslips, id]);
        }
    };

    const handleFilter = (e) => {
        setFilterText(e.target.value);
    };

   // const filteredPayslips = payslips.filter(payslip =>
     //   payslip.employee.toLowerCase().includes(filterText.toLowerCase())
   // );


    // Effect to update filteredPayslips when showFilterModal changes
    const [filteredPayslips, setFilteredPayslips] = useState(payslips);
    useEffect(() => {
        setFilteredPayslips(showFilterModal);
    }, [showFilterModal]);


    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilterCriteria((prevFilters) => ({
          ...prevFilters,
          [name]: value
      }));
  };

  const applyFilters = () => {
    let updatedData = [...payslips]; // Use payslips as the base data for filtering

    // Debug: log initial data and filter criteria
    console.log("Original Data:", payslips);
    console.log("Filter Criteria:", filterCriteria);

    if (filterCriteria.startDate) {
        updatedData = updatedData.filter(item => new Date(item.startDate) >= new Date(filterCriteria.startDate));
        console.log("After startDate filter:", updatedData); // Debug log
    }
    if (filterCriteria.endDate) {
        updatedData = updatedData.filter(item => new Date(item.endDate) <= new Date(filterCriteria.endDate));
        console.log("After endDate filter:", updatedData); // Debug log
    }
    if (filterCriteria.status) {
        updatedData = updatedData.filter(item => item.status === filterCriteria.status);
        console.log("After status filter:", updatedData); // Debug log
    }
    if (filterCriteria.batch) {
        updatedData = updatedData.filter(item => item.batch === filterCriteria.batch);
        console.log("After batch filter:", updatedData); // Debug log
    }
    if (filterCriteria.mailSent) {
        updatedData = updatedData.filter(item => item.mailSent === filterCriteria.mailSent);
        console.log("After mailSent filter:", updatedData); // Debug log
    }
    if (filterCriteria.grossPayLessThan) {
        updatedData = updatedData.filter(item => parseFloat(item.grossPay.replace('ETB ', '')) <= parseFloat(filterCriteria.grossPayLessThan));
        console.log("After grossPayLessThan filter:", updatedData); // Debug log
    }
    if (filterCriteria.grossPayGreaterOrEqual) {
        updatedData = updatedData.filter(item => parseFloat(item.grossPay.replace('ETB ', '')) >= parseFloat(filterCriteria.grossPayGreaterOrEqual));
        console.log("After grossPayGreaterOrEqual filter:", updatedData); // Debug log
    }
    if (filterCriteria.deductionLessThan) {
        updatedData = updatedData.filter(item => parseFloat(item.deduction.replace('ETB ', '')) <= parseFloat(filterCriteria.deductionLessThan));
        console.log("After deductionLessThan filter:", updatedData); // Debug log
    }
    if (filterCriteria.deductionGreaterOrEqual) {
        updatedData = updatedData.filter(item => parseFloat(item.deduction.replace('ETB ', '')) >= parseFloat(filterCriteria.deductionGreaterOrEqual));
        console.log("After deductionGreaterOrEqual filter:", updatedData); // Debug log
    }
    if (filterCriteria.netPayLessThan) {
        updatedData = updatedData.filter(item => parseFloat(item.netPay.replace('ETB ', '')) <= parseFloat(filterCriteria.netPayLessThan));
        console.log("After netPayLessThan filter:", updatedData); // Debug log
    }
    if (filterCriteria.netPayGreaterOrEqual) {
        updatedData = updatedData.filter(item => parseFloat(item.netPay.replace('ETB ', '')) >= parseFloat(filterCriteria.netPayGreaterOrEqual));
        console.log("After netPayGreaterOrEqual filter:", updatedData); // Debug log
    }

    setShowFilterModal(updatedData); // Update the filtered data

    // Debug: log final filtered data
    console.log("Filtered Data to Show:", updatedData);

    toggleFilterModal();
};

    

  const resetFilters = () => {
    setFilterCriteria({
      startDate: '',
      endDate: '',
      status: '',
      batch: '',
      mailSent: '',
      startDateFrom: '',
      startDateTill: '',
      endDateFrom: '',
      endDateTill: '',
      grossPayLessThan: '',
      grossPayGreaterOrEqual: '',
      deductionLessThan: '',
      deductionGreaterOrEqual: '',
      netPayLessThan: '',
      netPayGreaterOrEqual: '',
    });
    setShowFilterModal(payslips);
    toggleFilterModal()
};

    return (
        <div className="payslip-dashboard">
            <div className="header">
                <h2>Payslip</h2>
                <div className="actions">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={filterText} 
                        onChange={handleFilter} 
                        className="search-bar"
                    />
                    <button className="filter-btn" onClick={toggleFilterModal}>
                        <FaFilter /> Filter
                    </button>
                    <button className="group-by-btn">Group By</button>
                    <button className="actions-btn">Actions</button>
                    <button className="create-btn">
                        <FaPlus /> Create
                    </button>
                </div>
            </div>

             
{/* Filter Modal */}
{isFilterPopupOpen && (
                <div className="filter-modal">
                    <div className="filter-modal-content">
                        <h3>Filter Payslips</h3>

                        {/* Filter Section */}
                        <div className="filter-section">
                            <div className="form-row">
                                <label>Start Date
                                <DatePicker
                                    selected={filterCriteria.startDate}
                                    onChange={(date) => handleDateChange('startDate', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                                <label>End Date
                                <DatePicker
                                    selected={filterCriteria.endDate}
                                    onChange={(date) => handleDateChange('endDate', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>Status</label>
                                <select value={filterCriteria.status} onChange={(e) => setFilterCriteria({ ...filterCriteria, status: e.target.value })}>
                                    <option value="">-------</option>
                                    <option value="paid">Paid</option>
                                    <option value="confirmed">Confirmed</option>
                                    {/* Other statuses */}
                                </select>
                                <label>Batch</label>
                                <input type="text" value={filterCriteria.batch} onChange={(e) => setFilterCriteria({ ...filterCriteria, batch: e.target.value })} />
                            </div>
                            <div className="form-row">
                                <label>Mail Sent</label>
                                <select value={filterCriteria.mailSent} onChange={(e) => setFilterCriteria({ ...filterCriteria, mailSent: e.target.value })}>
                                    <option value="">Unknown</option>
                                    <option value="sent">Mail Sent</option>
                                    <option value="not-sent">Mail Not Sent</option>
                                </select>
                                
                            </div>
                        </div>

                        {/* Advanced Filter Section */}
                        <div className="filter-section-advanced">
                            <h4>Advanced</h4>
                            <div className="form-row">
                                <label>Start Date From
                                <DatePicker
                                    selected={filterCriteria.startDateFrom}
                                    onChange={(date) => handleDateChange('startDateFrom', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                                <label>Start Date Till
                                <DatePicker
                                    selected={filterCriteria.startDateTill}
                                    onChange={(date) => handleDateChange('startDateTill', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>End Date From
                                <DatePicker
                                    selected={filterCriteria.endDateFrom}
                                    onChange={(date) => handleDateChange('endDateFrom', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                                <label>End Date Till
                                <DatePicker
                                    selected={filterCriteria.endDateTill}
                                    onChange={(date) => handleDateChange('endDateTill', date)}
                                    dateFormat="dd-MM-yyyy"
                                />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>Gross Pay Less Than or Equal
                                <input type="number" value={filterCriteria.grossPayLessThan} onChange={(e) => setFilterCriteria({ ...filterCriteria, grossPayLessThan: e.target.value })} />
                                </label>
                                <label>Gross Pay Greater or Equal
                                <input type="number" value={filterCriteria.grossPayGreaterOrEqual} onChange={(e) => setFilterCriteria({ ...filterCriteria, grossPayGreaterOrEqual: e.target.value })} />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>Deduction Less Than or Equal
                                <input type="number" value={filterCriteria.deductionLessThan} onChange={(e) => setFilterCriteria({ ...filterCriteria, deductionLessThan: e.target.value })} />
                                </label>
                                <label>Deduction Greater or Equal
                                <input type="number" value={filterCriteria.deductionGreaterOrEqual} onChange={(e) => setFilterCriteria({ ...filterCriteria, deductionGreaterOrEqual: e.target.value })} />
                                </label>
                            </div>
                            <div className="form-row">
                                <label>Net Pay Less Than or Equal
                                <input type="number" value={filterCriteria.netPayLessThan} onChange={(e) => setFilterCriteria({ ...filterCriteria, netPayLessThan: e.target.value })} />
                                </label>
                                <label>Net Pay Greater or Equal
                                <input type="number" value={filterCriteria.netPayGreaterOrEqual} onChange={(e) => setFilterCriteria({ ...filterCriteria, netPayGreaterOrEqual: e.target.value })} />
                                </label>
                            </div>
                        </div>

                        <button className="apply-btn" onClick={applyFilters}>Apply Filters</button>
                        <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
                    </div>
                </div>
            )}

            {/* Filtered Data Display */}
            <div className="filtered-data">
                {showFilterModal && showFilterModal.length > 0 ? (
                    showFilterModal.map(item => (
                        <div key={item.id} className="data-item">
                            <p>{item.employeeName}</p>
                            <p>{item.startDate}</p>
                            <p>{item.endDate}</p>
                            {/* Other fields as necessary */}
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            <table className="payslip-table">
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                checked={selectedPayslips.length === payslips.length} 
                                onChange={handleSelectAll}
                            /> Select All
                        </th>
                        <th>Employee</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Batch</th>
                        <th>Gross Pay</th>
                        <th>Deduction</th>
                        <th>Net Pay</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPayslips.map(payslip => (
                        <tr key={payslip.id}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedPayslips.includes(payslip.id)} 
                                    onChange={() => handleSelect(payslip.id)} 
                                />
                            </td>
                            <td>{payslip.employee}</td>
                            <td>{payslip.startDate}</td>
                            <td>{payslip.endDate}</td>
                            <td>{payslip.batch}</td>
                            <td>{payslip.grossPay}</td>
                            <td>{payslip.deduction}</td>
                            <td>{payslip.netPay}</td>
                            <td>
                                <button className="action-btn"><FaEnvelope /></button>
                                <button className="action-btn"><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Page 1 of 1</span>
            </div>


        </div>
    );
};

export default Payslips;