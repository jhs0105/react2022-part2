import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("movie"));
  const searchMovie = searchParams.get("movie");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR&page=1&include_adult=false&=query=${searchMovie}`).then((response) => {
      console.log(response.data.results);
    });
  }, []);

  return <div>SearchResult</div>;
}
