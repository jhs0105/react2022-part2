import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CastingMovies from "./CastingMovies";

export default function ProfileDetail() {
  const profileId = useParams().id;
  console.log(profileId);
  const [detail, setDetail] = useState({});
  const [movies, setMovies] = useState([]);
  const [knownas, setKnownas] = useState("");
  useEffect(() => {
    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/person/${profileId}?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`)
    .then((response) => {
    setDetail(response.data);
    console.log(response.data)
    const KnownAs = response.data.also_known_as.map((item)=>item).join(" / ");
    setKnownas(KnownAs);
    //console.log(response.data.genres.forEach((item,idx) => {console.log(item.name)} ))
 
    });

    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`)
    .then((response)=>{
      console.log(response.data.cast)
      setMovies(response.data.cast)
    })
  }, [profileId]);

  return (
    <>
      <div className="container detail">
        <h2>{detail.title}</h2>
        <div className="detail-box">
          <div className="img-box">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt="" />
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{detail.name}</h3>
              <p className="original-title">{knownas}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>생일</dt>
                <dd>{detail.birthday}</dd>
              </dl>
              {detail.deathday && (
                <dl>
                  <dt>사망일</dt>
                  <dd>{detail.deathday}</dd>
                </dl>
              )}
              <dl>
                <dt>국적</dt>
                <dd>{detail.place_of_birth}</dd>
              </dl>
              <dl>
                <dt>인기도</dt>
                <dd>{detail.popularity}</dd>
              </dl>
              {detail.biography && (
                <dl>
                  <dt>Biography</dt>
                  <dd>{detail.biography}</dd>
                </dl>
              )}
              {detail.homepage && (
                <dl>
                  <dt>홈페이지</dt>
                  <dd className="desc">
                    <a href={detail.homepage} target="_blank" rel="noopener noreferrer">
                      {detail.homepage}
                    </a>
                  </dd>
                </dl>
              )}

              <dl>
                <dt>주요출연작</dt>
                <dd>
                  <Swiper className="castingMovies" spaceBetween={10} slidesPerView={6}>
                    {movies
                      .filter((item, idx) => {
                        return idx < 20;
                      })
                      .map((item, idx) => {
                        return (
                          <SwiperSlide>
                            <CastingMovies poster={item.poster_path} id={item.id} title={item.title} key={idx} />
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
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </>
  );
}
