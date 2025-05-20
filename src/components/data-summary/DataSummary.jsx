import React from 'react';

const DataSummary = ({ data }) => {

    const start = (data.total === 0) ? 0 : (data.page - 1) * data.limit + 1;
    const end = Math.min(data.page * data.limit, data.total);
    const summary = `Showing data ${start} to ${end} of ${data.total.toLocaleString()} entries`;

  return (
    <div id="pagination-summary" className="pagination-summary margin-0"
    style={{marginBottom: '1rem', color: '#a0aec0', fontSize: '14px'}}>
        {summary}
  </div>
  );
};

export default DataSummary; 