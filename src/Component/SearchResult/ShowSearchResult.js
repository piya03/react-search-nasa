import React from "react";
import "./style.css";
import ThumbnailImage from "./ThumbnailImage";
import Pagination from "./Pagination";
const ShowSearchResult = () => {
  return (
    <div className="all_search_res_box">
      <p className="heading1">NASA Media Search</p>
      <p>Search Result for moon landing</p>
      <ThumbnailImage />
      <ThumbnailImage />
      <ThumbnailImage />
      <ThumbnailImage />
      <ThumbnailImage />
      <Pagination />
      <div className="related_search">
        <p> Related Search</p>
        <div className="related_all_search_box">
          <div>search 1</div>
          <div>search 2</div>
          <div>search 3 </div>
          <div>search 4</div>
        </div>
      </div>
    </div>
  );
};

export default ShowSearchResult;
