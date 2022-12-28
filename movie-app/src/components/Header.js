import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  function front() {
    navigate(+1);
  }
  return (
    <header className="header" id="header">
      <button onClick={back} className="back">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <h1>
        <Link to="/">MOVIE-APP</Link>
      </h1>
      <Search />
      <button onClick={front} className="front">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </header>
  );
}
