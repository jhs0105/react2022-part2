import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const searchInput = useRef();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        placeholder="검색어를 넣어주세요"
        ref={searchInput}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            navigate(`/search/${search}`);
            e.currentTarget.value = "";
          }
        }}
      />
      <button
        onClick={() => {
          navigate(`/search/${search}`);
          searchInput.current.value = "";
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
