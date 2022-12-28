import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileman.png";
import profileImgWoman from "../assets/profilewoman.jpg";

export default function Profile({ img, name, gender, id }) {
  return (
    <>
      <Link to={`/profile/${id}`}>
        <div className="profile-img">{img ? <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt="" /> : gender === 1 ? <img src={profileImgWoman} alt="" /> : <img src={profileImg} alt="" />}</div>
        <div className="profile-info">
          <p>{name}</p>
        </div>
      </Link>
    </>
  );
}
