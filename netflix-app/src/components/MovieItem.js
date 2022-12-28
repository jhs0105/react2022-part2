import React from "react";
import styled from "styled-components";
import api from "../api/api";
import requests from "../api/requests";

function MovieItem({ title, src, desc, type, id, showVideo }) {
  return (
    <Container>
      <div className={type}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/original/${src}`} alt="" />
        </div>
        <div className="info">
          <h2>{title}</h2>
          <div className="btns">
            <button
              className="play"
              onClick={() => {
                //console.log(id);
                api
                  .get(`${requests.fetchMovie}/${id}`, { params: { append_to_response: "videos" } })
                  .then((response) => {
                    //console.log(response.data.videos.results);
                    const videos = response.data.videos.results;
                    if (videos.length > 0) {
                      showVideo(response.data.videos.results[0].key);
                    } else {
                      showVideo(null);
                    }
                  })
                  .catch((err) => {
                    showVideo(null);
                  });
              }}
            >
              play
            </button>
            <button className="more">more information</button>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .main {
    height: 100vh;
    text-align: left;
    .img {
      position: relative;
      :before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .info {
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 200px;
      h2 {
        font-size: 48px;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      }
      .btns {
        margin: 20px 0;
        button {
          padding: 15px;
          background-color: #fff;
          font-size: 16px;
          border-radius: 5px;
          margin-right: 5px;
          text-transform: uppercase;
          font-weight: 700;
          &.more {
            background-color: #3f6894;
            color: #fff;
          }
        }
      }
      p {
        line-height: 1.5;
        max-width: 600px;
        font-size: 18px;
        word-break: keep-all;
      }
    }
  }
  .banner {
    height: auto;
    text-align: left;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .img {
      position: relative;
    }
    img {
      width: 100%;
      max-height: 340px;
      object-fit: cover;
    }
    .info {
      background-color: #111;
      color: #fff;
      padding: 20px;
      h2 {
        font-size: 20px;
        font-weight: 500;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 0;
        //multielipsis
        line-height: 1.5;
        height: 3em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .btns {
        margin: 20px 0;
        button {
          padding: 5px;
          background-color: #fff;
          font-size: 12px;
          border-radius: 5px;
          margin-right: 5px;
          text-transform: uppercase;
          font-weight: 700;
          &.more {
            background-color: #3f6894;
            color: #fff;
          }
        }
      }
      p {
        line-height: 1.5;
        height: 4.5em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-width: 600px;
        font-size: 14px;
        word-break: keep-all;
      }
    }
  }
`;
export default MovieItem;
