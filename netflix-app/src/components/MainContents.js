import React from "react";
import Rows from "./Rows";
import requests from "../api/requests";

function MainContents({ showVideo }) {
  return (
    <>
      <Rows title="netflix original" fetchURL={requests.fetchNetflixOriginals} type="banner" showNum="3" showVideo={showVideo}></Rows>
      <Rows title="top Rated" fetchURL={requests.fetchTopRated} type="banner" showVideo={showVideo}></Rows>
      <Rows title="popular" fetchURL={requests.fetchPopular} type="banner" showVideo={showVideo}></Rows>
    </>
  );
}

export default MainContents;
