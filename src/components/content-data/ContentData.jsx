import React, { useState, useCallback } from 'react';
import './ContentData.css';
import Search from '../search/Search';
import ContentTable from '../content-table/ContentTable';
import ContentFooter from '../contentfooter/ContentFooter';

const ContentData = () => {
  const [data, setData] = useState({
    'data': [],
    'total': 0,
    'page': 1,
    'limit': 10,
    'totalPages': 0,
  });
  const [page, setPage] = useState(1);
  const options = ["Newest", "Oldest", "Inactive", "Active"];
  const [filteredData, setFilteredData] = useState({
    'name': ''
  });

  const handleSearchChange = useCallback((value) => {
    const search = setTimeout(() => {
      setFilteredData(prevData => ({
        ...prevData,
        name: value
      }));
    }, 3000);

    return () => clearTimeout(search);
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
      <ContentTable filteredData={filteredData} data={data} setData={setData} page={page}/>
      <ContentFooter data={data} setData={setData} page={page} setPage={setPage}/>
    </div>
  )
}

export default ContentData;