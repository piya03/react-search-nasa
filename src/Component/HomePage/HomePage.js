import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
const HomePage = () => {
  const [today_info, setTodayInfo] = useState("");
  console.log(
    "🚀 ~ file: HomePage.js ~ line 6 ~ HomePage ~ today_info",
    today_info
  );
  function todayImgFun() {
    axios(
      `${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res?.status == 200) {
          setTodayInfo(res?.data);
        }
        console.log(res, "sfhgj");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    todayImgFun();
  }, []);
  return (
    <div>
      <div className="container">
        <p className="heading_first"> NASA Media Search</p>

        <div className="search_container">
          <div>{today_info?.title}</div>
          <div className="input_search">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="today_pic">
          <img src={today_info?.hdurl} alt="" />
        </div>
        <div className="hompage_bottom">
          <div>{today_info?.explanation}</div>
          <div>{today_info?.date}</div>
          <div>@ {today_info?.copyright}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
