import React, { useRef, useState } from "react";
import logo from "../assets/You.png";

export default function Search({ onSearch, firstPage }) {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const onClick = () => {
    console.log(search);
    onSearch(search);
    inputRef.current.value = "";
  };
  const onKeyDown = () => {
    console.log(search);
    onSearch(search);
    inputRef.current.value = "";
  };
  return (
    <header className="header">
      <div className="container">
        <h1>
          <button
            onClick={() => {
              firstPage();
            }}
          >
            <img src={logo} alt="" />
          </button>
        </h1>
        <div className="search">
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onKeyDown();
              }
            }}
          />
          <button onClick={onClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
