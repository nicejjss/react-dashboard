import React from 'react';
import './DataPagination.css';

const DataPagination = ({ data, page, setPage }) => {
    const handlePageClick = (newPage) => {
        if (newPage >= 1 && newPage <= data.totalPages) {
            setPage(newPage);
        }
    };

    const renderPageButtons = () => {
        const buttons = [];

        // Previous button
        buttons.push(
            <button
                key="prev"
                className={`pagination-button ${page === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageClick(page - 1)}
                disabled={page === 1}
            >
                &lt;
            </button>
        );

        // First page
        buttons.push(
            <button
                key="1"
                className={`pagination-button ${page === 1 ? 'active' : ''}`}
                onClick={() => handlePageClick(1)}
            >
                1
            </button>
        );

        // Calculate range of pages to show
        let startPage = Math.max(2, page - 1);
        let endPage = Math.min(data.totalPages - 1, page + 1);

        // Add dots after first page if needed
        if (startPage > 2) {
            buttons.push(
                <span key="dots1" className="dots">
                    ...
                </span>
            );
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`pagination-button ${page === i ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }

        // Add dots before last page if needed
        if (endPage < data.totalPages - 1) {
            buttons.push(
                <span key="dots2" className="dots">
                    ...
                </span>
            );
        }

        // Last page (if more than one page)
        if (data.totalPages > 1) {
            buttons.push(
                <button
                    key={data.totalPages}
                    className={`pagination-button ${page === data.totalPages ? 'active' : ''}`}
                    onClick={() => handlePageClick(data.totalPages)}
                >
                    {data.totalPages}
                </button>
            );
        }

        // Next button
        buttons.push(
            <button
                key="next"
                className={`pagination-button ${page === data.totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageClick(page + 1)}
                disabled={page === data.totalPages}
            >
                &gt;
            </button>
        );

        return buttons;
    };

    return (
        <div className="pagination-container margin-0">
            {renderPageButtons()}
        </div>
    );
};

export default DataPagination;