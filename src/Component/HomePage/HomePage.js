import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomePage = ({
  loading,
  today_info,
  searchVal,
  setSearchVal,
  setPage,
}) => {
  const history = useHistory();
  function goToSearchPage(val) {
    return history.push(`/search?q=${encodeURIComponent(val?.trim())}`);
  }
  useEffect(() => {
    setPage(1);
  }, []);
  return (
    <div>
      <div className="container">
        {loading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          <>
            <p className="heading_first"> NASA Media Search</p>
            <div className="search_container">
              <div>{today_info?.title}</div>
              <div className="input_search">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => {
                    setSearchVal(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      goToSearchPage(searchVal);
                    }
                  }}
                />
                <button onClick={() => goToSearchPage(searchVal)}>
                  Search
                </button>
              </div>
            </div>
            <div className="today_pic">
              <img src={today_info?.url} alt="" />
            </div>
            <div className="hompage_bottom">
              <div>{today_info?.explanation}</div>
              <div>{today_info?.date}</div>
              <div>@ {today_info?.copyright}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
