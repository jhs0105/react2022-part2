import React, { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import List from "./List";
import Search from "./Search";

export default function Main() {
  const [videos, setVideos] = useState([]);
  const [videoInfo, setVideoInfo] = useState({});
  const [isDetail, setIsDetail] = useState(false);

  const scrollTop = () => {
    //window.scrollTo(0,0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMain = () => {
    //prettier-ignore
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=30&type=video&key=AIzaSyCkHNmGU7gG8FKK4MHhP0UDT913iuN1f3k&chart=mostPopular&regionCode=KR`)
    .then((response) => {
      console.log(response.data.items);
      setVideos(response.data.items);
    });
  };

  useEffect(() => {
    showMain();
  }, []);
  // useEffect(() => {
  //   setVideoInfo({ videoId: "mgbZunbhsX0", title: "hello", description: "설명글이 들어갑니다." });
  // }, []);

  function selectedVideo(item) {
    console.log(item);
    setVideoInfo({ videoId: `${item.videoId}`, title: `${item.snippet.title}`, description: `${item.snippet.description}` });
    //console.log("나는 videoItem에서 전달된 obj를 Detail로 전달할 예정입니다.");
    setIsDetail(true);
  }

  const onSearch = (searchTxt) => {
    //prettier-ignore
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&key=AIzaSyCkHNmGU7gG8FKK4MHhP0UDT913iuN1f3k&chart=mostPopular&regionCode=KR&q=${searchTxt}`)
    .then((response) => {
      console.log(response.data);
      setVideos(response.data.items);
    });
  };
  const firstPage = () => {
    setIsDetail(false);
    showMain();
  };

  return (
    <>
      <Search onSearch={onSearch} firstPage={firstPage} />
      <div className={`main ${isDetail ? "detail-view" : ""}`}>
        {isDetail && <Detail videoId={videoInfo.videoId} title={videoInfo.title} description={videoInfo.description}></Detail>}
        <List selectedVideo={selectedVideo} videos={videos} scrollTop={scrollTop}></List>
      </div>
    </>
  );
}
