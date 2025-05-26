import React from 'react';
import './ContentFooter.css';
import DataSummary from '../../data-summary/DataSummary';
import DataPagination from '../../data-pagination/DataPagination';

const ContentFooter = ({ data, page, setPage }) => {

  return (
    <section id="content-data-pagination" className="margin-0">
      <DataSummary data={data}/>
      <DataPagination data={data} page={page} setPage={setPage}/>
    </section>
  )
}

export default ContentFooter;