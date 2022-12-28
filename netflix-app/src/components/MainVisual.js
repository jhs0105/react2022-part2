import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import requests from "../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, EffectCube, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import MovieItem from "./MovieItem";

function MainVisual({ showVideo }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadMovieData();
  }, []);
  //console.log(movies);
  const loadMovieData = async () => {
    const result = await api.get(requests.fetchNowPlaying);
    //console.log(result.data.results[0].backdrop_path);
    setMovies(result.data.results);
  };

  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  //console.log(ellipsis("동해물과 백두산이 마르고 닳도록", 10));
  return (
    <Container>
      <Swiper
        modules={[EffectFade, EffectCube, Autoplay, Navigation, Pagination]}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
      >
        {movies
          .filter((item, idx) => {
            if (idx < 10) {
              return true;
            }
          })
          .map((item, idx) => {
            return (
              <SwiperSlide>
                {/* <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /> */}
                <MovieItem title={item.title} src={item.backdrop_path} desc={ellipsis(item.overview, 150)} type="main" id={item.id} showVideo={showVideo}></MovieItem>
              </SwiperSlide>
            );
          })}
        <div className="prev nav">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="next nav">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  .nav {
    font-size: 48px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    color: #fff;
    i {
      font-size: 80px;
    }
  }
  .prev {
    left: 50px;
  }
  .next {
    right: 50px;
  }

  .swiper-pagination {
    bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    opacity: 1;
    background: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    transition: all 0.25s ease;
  }

  .swiper-pagination-bullet-active {
    width: 80px;
    background-color: #fff;
  }
`;

export default MainVisual;
