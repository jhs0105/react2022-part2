import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Rows({ title, fetchURL, type, showNum, showVideo }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadMovieData();
  }, []);
  //console.log(movies);
  const loadMovieData = async () => {
    const result = await api.get(fetchURL);
    setMovies(result.data.results);
  };

  return (
    <Container>
      <div className="wrapper">
        <h2>{title}</h2>
        <Swiper
          slidesPerView={showNum ? showNum : 5}
          slidesPerGroup={3}
          spaceBetween={20}
          speed={1000}
          loop={true}
          centeredSlides={true}
          initialSlide={6}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
        >
          {movies.map((item, idx) => {
            return (
              <div className="swiper-box">
                <SwiperSlide>
                  <MovieItem title={item.title ? item.title : item.name} src={item.poster_path} desc={item.overview} type={type} id={item.id} showVideo={showVideo}></MovieItem>
                </SwiperSlide>
              </div>
            );
          })}
          <div className="prev nav">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="next nav">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Swiper>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin: 100px auto 150px;
  padding-bottom: 80px;
  overflow: hidden;
  .wrapper {
    width: 1400px;
    margin: auto;
  }
  .swiper {
    overflow: visible;
    width: 1400px;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 50px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 700;
    text-align: left;
  }
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
    left: -100px;
  }
  .next {
    right: -100px;
  }

  .swiper-pagination {
    bottom: -80px !important;
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

export default Rows;
