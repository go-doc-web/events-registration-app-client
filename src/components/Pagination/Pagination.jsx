import React from "react";
import "./Pagination.css";

// eslint-disable-next-line react/prop-types
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <a href="#" onClick={() => onPageChange(currentPage - 1)}>
            &laquo; Prev
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? "active" : ""}>
            <a href="#" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className={currentPage === totalPages ? "disabled" : ""}>
          <a href="#" onClick={() => onPageChange(currentPage + 1)}>
            Next &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
