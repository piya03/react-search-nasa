import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import ShowSearchResult from "./Component/SearchResult/ShowSearchResult";
import { todayImgAPI, searchAPI } from "./api/api";
function App() {
  const [today_info, setTodayInfo] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  //day of pic fun
  async function todayImgFun() {
    try {
      setLoading(true);
      const res = await todayImgAPI();
      if (res?.status === 200) {
        setLoading(false);
        setTodayInfo(res?.data);
      }
    } catch (e) {
      setLoading(true);
      console.warn("Error in fetching");
    }
  }

  useEffect(() => {
    todayImgFun();
  }, []);

  //search fun
  async function searchFun(val) {
    if (!val) return;
    let trimVal = val.trim();
    try {
      setLoading(true);
      const res = await searchAPI(trimVal, page);
      if (res?.status === 200) {
        setLoading(false);
        setSearchData(res?.data?.collection?.items);
      }
    } catch (e) {
      setLoading(true);
      console.warn("Error in fetching");
    }
  }

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <HomePage
                today_info={today_info}
                loading={loading}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
            );
          }}
        />
        <Route
          path="/search"
          render={() => {
            return (
              <ShowSearchResult
                loading={loading}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                searchData={searchData}
                searchFun={searchFun}
                page={page}
                setPage={setPage}
              />
            );
          }}
        />
      </Switch>
    </>
  );
}

export default App;
