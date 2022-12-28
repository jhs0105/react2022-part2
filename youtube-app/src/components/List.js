import VideoItem from "./VideoItem";

export default function List({ selectedVideo, videos, scrollTop }) {
  return (
    <div className="container">
      <ul className="video-list">
        {videos.map((item, idx) => {
          //console.log(item.id.videoId);
          return <VideoItem snippet={item.snippet} videoId={item.id.videoId ? item.id.videoId : item.id} selectedVideo={selectedVideo} scrollTop={scrollTop} key={idx} />;
        })}
      </ul>
    </div>
  );
}
