import React from "react";
import noImages from "../assets/noimages.jpg";
import { Link } from "react-router-dom";

export default function CastingMovies({ poster, title, id }) {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="images">{poster ? <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="" /> : <img src={noImages} alt="" />}</div>
        <div className="castingMovies-info">
          <p>{title}</p>
        </div>
      </Link>
    </>
  );
}
