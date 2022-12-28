import axios from "axios";
import Profile from "./Profile";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Detail() {
  //const [count, setCount] = useState(0);
  const movieId = useParams().id;
  console.log(movieId);
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState("");
  const [cast, setCast] = useState([]);

  const getDetail = useCallback(() => {
    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`)
        .then((response) => {
        setDetail(response.data);
        //console.log(response.data)
        //console.log(response.data.genres.forEach((item,idx) => {console.log(item.name)} ))
        setGenres(response.data.genres.map(item=>item.name).join("/")) //join은 배열을 문자열로 바꿔준다
        //console.log(genres);
        });
  }, [movieId]);

  const getCast = useCallback(() => {
    //prettier-ignore
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR`)
.then((response) => {
//console.log(response.data);
setCast(response.data.cast)
console.log(response.data.cast)
});
  }, [movieId]);

  useEffect(() => {
    getDetail();
    getCast();
  }, [getDetail, getCast]);

  return (
    <>
      <div className="container detail">
        <h2>{detail.title}</h2>
        <div className="detail-box">
          <div className="img-box">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{detail.title}</h3>
              <p className="original-title">{detail.original_title}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd>{genres}</dd>
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
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>줄거리</dt>
                <dd className="desc">{detail.overview}</dd>
              </dl>
              <dl className="cast">
                <dt>주요출연진</dt>
                <dd>
                  <Swiper spaceBetween={10} slidesPerView={8} className="cast-list">
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide className="item">
                          <Profile img={item.profile_path} name={item.name} gender={item.gender} id={item.id} key={idx} />
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
