import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

//tmdb api 사용예정(다양한 정보를 제공)

export default function List() {
  //화면을 랜더링할때는 useState를 사용
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    //prettier-ignore
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR&page=1")
    .then((response) => {
    console.log(response.data.results);
    setMovies(response.data.results)
  });
  }, []); //dependencies

  return (
    <div className="container">
      <h2>
        <strong>popular</strong> movie
      </h2>
      <ul className="movie-list">
        {movies.map((item, idx) => {
          // return <Movie title={item.title} originalTitle={item.original_title} releaseDate={item.release_date} poster={item.poster_path} overview={item.overview} vote={item.vote_average} key={idx} />;
          return <Movie movieInfo={item} key={idx} />;
        })}
      </ul>
    </div>
  );
}
