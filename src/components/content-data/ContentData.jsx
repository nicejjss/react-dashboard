import React, { useState, useCallback } from 'react';
import './ContentData.css';
import Search from '../search/Search';
import ContentTable from '../content-table/ContentTable';

const ContentData = () => {
  const options = ["Newest", "Oldest", "Inactive", "Active"];
  const [filteredData, setFilteredData] = useState({
    'name': ''
  });

  const handleSearchChange = useCallback((value) => {
    setFilteredData(prevData => ({
      ...prevData,
      name: value
    }));
  }, []);

  return (
    <div id="content-data">
      <section id="content-data-header">
        <div id="content-data-header-title" className="margin-0">
          <h2>All Customers</h2>
          <span className="rate-up">Active Members</span>
        </div>
        <form id="customer-search" className="margin-0">
          <Search 
            name="customer" 
            value={filteredData.name}
            onChange={handleSearchChange}
          />
          <label id="form-filter" htmlFor="filter-select">
            <span>Sort by:</span>
            <select name="filter" id="filter-select" className="select-input">
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="filter-icon-wrapper">
              <img id="filter-icon" src="./src/assets/icons/down-arrow.svg" alt="Filter Icon" />
            </div>
          </label>
        </form>
      </section>
      <ContentTable filteredData={filteredData}/>
    </div>
  )
}

export default ContentData;