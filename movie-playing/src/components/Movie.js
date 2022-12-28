import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movieInfo }) {
  return (
    <>
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img-box">
          <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt="" />
        </div>
        <div className="info">
          <div className="title">
            <h3 className="movie-title">{movieInfo.title}</h3>
            <p className="original-title">{movieInfo.original_title}</p>
          </div>
          <dl>
            <dt>개봉일자</dt>
            <dd>{movieInfo.release_date}</dd>
          </dl>
          <dl>
            <dt>평점</dt>
            <dd>{movieInfo.vote_average}</dd>
          </dl>
          <div className="details">상세보기</div>
        </div>
      </Link>
    </>
  );
}
