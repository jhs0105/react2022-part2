import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import VideoBox from "./components/VideoBox";
import MainContents from "./components/MainContents";
import { useState } from "react";

function App() {
  const [view, setView] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const viewChange = (isView) => {
    setView(isView);
    //video 끄는 것
  };
  const showVideo = (id) => {
    setView(true);
    setVideoId(id);
    //videoBox를 true로 바꾸고 id를 전달
  };
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainVisual showVideo={showVideo}></MainVisual>
      <MainContents showVideo={showVideo}></MainContents>
      {view && <VideoBox viewChange={viewChange} showVideo={showVideo} videoId={videoId}></VideoBox>}
      <Footer></Footer>
    </div>
  );
}

export default App;

