import React, { useEffect } from "react";
import "./style.css";
import ThumbnailImage from "./ThumbnailImage";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ShowSearchResult = ({
  searchData,
  loading,
  searchFun,
  setSearchVal,
  searchVal,
  page,
  setPage,
}) => {
  const history = useHistory();
  let related = searchData?.[0]?.data?.[0]?.keywords;

  const params = new URLSearchParams(window?.location?.search);
  const search = params.get("q");

  useEffect(() => {
    searchFun(search);
  }, [page, search]);
  return (
    <div className="all_search_res_box">
      <p className="heading1">NASA Media Search</p>
      <div className="back" onClick={() => history.push("/")}>
        <ArrowBackIcon />
      </div>
      <p className="sticky_header">Search Result for {searchVal || search}</p>

      {loading ? (
        <div className="loder">
          <CircularProgress />
        </div>
      ) : (
        <div className="all_thumbnail">
          {searchData && searchData?.length !== 0 ? (
            searchData?.map((each, i) => {
              return <ThumbnailImage key={i} each={each} />;
            })
          ) : (
            <p>No Data Available</p>
          )}

          {searchData && searchData?.length !== 0 && (
            <>
              <Pagination page={page} setPage={setPage} />
              <div className="related_search">
                <p> Related Search</p>
                <div className="related_all_search_box">
                  {related &&
                    related?.slice(0, 9)?.map((each, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setSearchVal(each?.trim());
                            history.push(
                              `/search?q=${encodeURIComponent(each?.trim())}`
                            );
                          }}
                        >
                          {each}
                        </div>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowSearchResult;
