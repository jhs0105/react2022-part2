import React from "react";

export default function VideoItem({ videoId, snippet, selectedVideo, scrollTop }) {
  const onClickFunc = () => {
    console.log("click");
    //console.log(videoId);
    selectedVideo({ snippet, videoId: videoId });
    scrollTop();
  };
  return (
    <li onClick={onClickFunc}>
      <div className="img-box">
        <img src={snippet.thumbnails.high.url} alt={snippet.title} />
      </div>
      <div className="info">
        <h3 dangerouslySetInnerHTML={{ __html: snippet.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: snippet.description }}></p>
      </div>
    </li>
  );
}
