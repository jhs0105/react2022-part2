import React from "react";
import noImage from "../assets/nomovieposter.png";
import { Link } from "react-router-dom";

export default function ComingMovie({ comingInfo }) {
  return (
    <li>
      <Link to={`/detail/${comingInfo.id}`}>
        <div className="comingsoon-img-box">{comingInfo.poster_path ? <img src={`https://image.tmdb.org/t/p/w200/${comingInfo.poster_path}`} alt="" /> : <img src={noImage} alt="" />}</div>
        <div className="comingsoon-info">
          <h3>{comingInfo.title}</h3>
          <p className="originalTitle">{comingInfo.original_title}</p>
          <p className="date">{comingInfo.release_date}</p>
          <p className="summary">{comingInfo.overview}</p>
        </div>
      </Link>
    </li>
  );
}
