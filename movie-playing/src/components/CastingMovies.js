import React from "react";
import { Link } from "react-router-dom";
import noPoster from "../assets/nomovieposter.png";

export default function CastingMovies({ casting }) {
  return (
    <Link to={`/detail/${casting.id}`}>
      <div className="img-box">{casting.poster_path ? <img src={`https://image.tmdb.org/t/p/w200/${casting.poster_path}`} alt="" /> : <img src={noPoster} alt="" />}</div>
      <div className="info">
        <p>{casting.title}</p>
      </div>
    </Link>
  );
}
