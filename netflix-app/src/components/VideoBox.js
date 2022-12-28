import React from "react";
import styled from "styled-components";

function VideoBox({ videoId, viewChange, showVideo }) {
  console.log(videoId);
  if (videoId) {
    return (
      <Container>
        <iframe
          width="100vw"
          height="100vh"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button
          onClick={() => {
            viewChange(false);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="notFound">
          <h2>There is no video for playing</h2>
        </div>
        <button
          onClick={() => {
            viewChange(false);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  iframe {
    width: 1920px;
    height: calc(1920px * (9 / 16));
  }
  button {
    position: absolute;
    right: 50px;
    top: 50px;
    i {
      color: #fff;
      font-size: 48px;
    }
  }
  .notFound {
    width: 100%;
    height: 100%;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 5rem;
      font-weight: 500;
      color: #fff;
    }
  }
`;
export default VideoBox;
