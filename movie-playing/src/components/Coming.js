import axios from "axios";
import ComingMovie from "./ComingMovie";
import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Coming() {
  const [comingList, setComingList] = useState([]);
  const nowDate = moment().format("YYYY-MM-DD");
  console.log(nowDate);
  useEffect(() => {
    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR&page=1&primary_release_date.gte=${nowDate}`)
    .then((response)=>{
    setComingList(response.data.results)
    console.log(response.data.results)
    
  })
  }, []);

  return (
    <>
      <h2 className="main-title">Coming Soon</h2>
      <div className="coming-soon">
        <ul>
          {comingList.map((item, idx) => {
            return <ComingMovie comingInfo={item} key={idx} />;
          })}
          <pagination></pagination>
        </ul>
      </div>
    </>
  );
}
