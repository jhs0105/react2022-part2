import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("movie"));
  const searchMovie = searchParams.get("movie");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      //prettier-ignore
      axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR&page=1&query=${searchMovie}`)
    .then((response) => {
    console.log(response.data.results);
    setMovies(response.data.results)
  });
    },
    [searchMovie]
  ); //dependencies (searchMovie가 바뀔때마다..변한다)

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
