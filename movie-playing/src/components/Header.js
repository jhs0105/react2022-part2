import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const prev = () => {
    navigate(+1);
  };

  return (
    <header className="header" id="header">
      <button onClick={back}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <h1>
        <Link to={"./"}>Movies</Link>
      </h1>
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.currentTarget.value);
            //console.log(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            navigate(`/search?movie=${search}`);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button onClick={prev}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </header>
  );
}
