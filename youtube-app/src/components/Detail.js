import React from "react";

export default function Detail({ videoId, title, description }) {
  console.log(videoId);
  return (
    <div className="detail">
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}
