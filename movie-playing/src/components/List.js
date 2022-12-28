import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Coming from "./Coming";

export default function List() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //prettier-ignore
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=0742c9cc252224f478b0a7382dd4b843&language=ko-KR&page=1")
    .then((response)=>{
    //console.log(response.data)
    setMovies(response.data.results)
    //console.log(response.data.results)
    
  })
  }, []);

  return (
    <>
      <h2 className="main-title">Now Playing</h2>
      <div className="now-playing">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {movies.map((item, idx) => {
            return (
              <SwiperSlide>
                <Movie movieInfo={item} key={idx} />
              </SwiperSlide>
            );
          })}
          <pagination></pagination>
        </Swiper>
      </div>
      <Coming />
    </>
  );
}
