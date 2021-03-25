import React from "react";
import "./style.css";

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <div className="pageNo_box">
        {page !== 1 && (
          <span className="prev" onClick={() => setPage((pre) => pre - 1)}>
            previous
          </span>
        )}

        {[1, 2, 3, 4, 5].map((each, i) => {
          return (
            <span
              key={i}
              style={{
                color: page === each ? "blue" : "black",
                textDecoration: page === each ? "underline" : "none",
              }}
              className="Page_numbers"
              onClick={() => setPage(each)}
            >
              {each}
            </span>
          );
        })}
        {page !== 5 && (
          <span onClick={() => setPage((pre) => pre + 1)} className="next">
            next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
