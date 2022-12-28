import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage1 from "../assets/profilewoman.jpg";
import noImage2 from "../assets/profileman.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CastingMovies from "./CastingMovies";

export default function Profile() {
  const profileId = useParams().id;
  const [profile, setProfile] = useState([]);
  const [known, setKnown] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${profileId}?api_key=0742c9cc252224f478b0a7382dd4b843&language=en-US`).then((response) => {
      setProfile(response.data);
      console.log(response.data);
      const knownAs = response.data.also_known_as.map((item, idx) => {
        return item;
      });
      setKnown(knownAs.join(" / "));
    });

    axios.get(`https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`).then((response) => {
      setMovies(response.data.cast);
    });
  }, []);

  return (
    <div className="container profile">
      <h2>Detail Page</h2>
      <div className="detail-box">
        <div className="detail-img-box">
          {profile.profile_path ? <img src={`https://image.tmdb.org/t/p/w300/${profile.profile_path}`} alt="" /> : profile.gender === 1 ? <img src={noImage1} alt="" /> : <img src={noImage2} alt="" />}
        </div>
        <div className="info-box">
          <div className="title">
            <h3>{profile.name}</h3>
            <h4>{known}</h4>
          </div>
          <div className="summary">
            <dl>
              <dt>Birthday</dt>
              <dd>{profile.birthday}</dd>
            </dl>
            <dl>
              <dt>Place of Birth</dt>
              <dd>{profile.place_of_birth}</dd>
            </dl>
            <dl className="biography">
              <dt>Biography</dt>
              <dd>{profile.biography}</dd>
            </dl>
            {profile.homepage && (
              <dl>
                <dt>Homepage</dt>
                <dd>
                  <a href={profile.homepage} target="_blank" rel="noreferrer">
                    {profile.homepage}
                  </a>
                </dd>
              </dl>
            )}
            <dl>
              <dt>출연작</dt>
              <dd>
                <Swiper className="movie-swiper" spaceBetween={10} slidesPerView={6}>
                  {movies
                    .filter((item, idx) => {
                      return idx < 20;
                    })
                    .map((item, idx) => {
                      return (
                        <SwiperSlide>
                          <CastingMovies casting={item} key={idx} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
