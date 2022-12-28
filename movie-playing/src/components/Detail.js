import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Casting from "./Casting";
import { Swiper, SwiperSlide } from "swiper/react";
import noPoster from "../assets/nomovieposter.png";
import "swiper/css";

export default function Detail() {
  const movieId = useParams().id;
  const [detail, setDetail] = useState({});
  const [genre, setGenre] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`)
    .then((response)=>{
    setDetail(response.data)
    console.log(response.data)
    const temp = (response.data.genres.map((item)=>{return item.name}))
    setGenre(temp.join("/"))
    //console.log(temp.join("/"))


    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0742c9cc252224f478b0a7382dd4b843&language=en-US`)
    .then((response)=>{
      setCast(response.data.cast)
    })


 });
  }, []);

  return (
    <>
      <div className="container">
        <h2>Detail Page</h2>
        <div className="detail-box">
          <div className="detail-img-box">{detail.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" /> : <img src={noPoster} alt="" />}</div>
          <div className="info-box">
            <div className="title">
              <h3>{detail.title}</h3>
              <h4>{detail.original_title}</h4>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd>{genre}</dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>상영시간</dt>
                <dd>{detail.runtime}분</dd>
              </dl>
              <dl>
                <dt>줄거리</dt>
                <dd>{detail.overview}</dd>
              </dl>
              <dl>
                <dt>출연진</dt>
                <dd>
                  <Swiper className="casting-swiper" spaceBetween={10} slidesPerView={8}>
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide>
                          <Casting casting={item} key={idx} />
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
      <div className="background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </>
  );
}
