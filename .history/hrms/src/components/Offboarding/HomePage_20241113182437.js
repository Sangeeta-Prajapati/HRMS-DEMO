import React, { useState } from 'react';
import './Offboarding.css'; // Assuming you have a CSS file for styling

const Offboarding = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [offboardingData, setOffboardingData] = useState([]);
  const [newData, setNewData] = useState({
    title: '',
    description: '',
    manager: '',
    status: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreate = () => {
    setCreateOpen(true);
  };

  const handleCloseCreate = () => {
    setCreateOpen(false);
  };

  const handleSave = () => {
    setOffboardingData([...offboardingData, newData]);
    setCreateOpen(false);
  };

  const handleExpand = (index) => {
    const updatedData = offboardingData.map((item, i) => 
      i === index ? { ...item, expanded: !item.expanded } : item
    );
    setOffboardingData(updatedData);
  };

  return (
    <div className="offboarding-section">
      <h2>Offboarding 2024</h2>
      
      <div className="actions">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <button onClick={() => setFilterOpen(!filterOpen)}>Filter</button>
        <button onClick={handleCreate}>+ Create</button>
      </div>

      {filterOpen && <div className="filter-popup">Filter options go here</div>}

      {createOpen && (
        <div className="create-popup">
          <h3>Offboarding</h3>
          <form>
            <div className="form-row">
              <label>Title <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.title} 
                onChange={(e) => setNewData({ ...newData, title: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Description <span className="required">*</span></label>
              <textarea 
                value={newData.description} 
                onChange={(e) => setNewData({ ...newData, description: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Manager <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.manager} 
                onChange={(e) => setNewData({ ...newData, manager: e.target.value })} 
                required 
              />
            </div>
            <div className="form-row">
              <label>Status <span className="required">*</span></label>
              <input 
                type="text" 
                value={newData.status} 
                onChange={(e) => setNewData({ ...newData, status: e.target.value })} 
                required 
              />
            </div>
            <button type="button" onClick={handleSave}>Save</button>
            <button type="button" onClick={handleCloseCreate}>Cancel</button>
          </form>
        </div>
      )}

      <div className="offboarding-list">
        {offboardingData.map((data, index) => (
          <div key={index} className="offboarding-item">
            <div className="item-header" onClick={() => handleExpand(index)}>
              <span>{data.title}</span>
              <button>{data.expanded ? '-' : '+'}</button>
            </div>
            {data.expanded && (
              <div className="item-content">
                <p><strong>Description:</strong> {data.description}</p>
                <p><strong>Manager:</strong> {data.manager}</p>
                <p><strong>Status:</strong> {data.status}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offboarding;
