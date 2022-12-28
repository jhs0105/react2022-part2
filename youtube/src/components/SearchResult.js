import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SearchResult() {
  const searchTitle = useParams().id;
  const [search, setSearch] = useState([]);

  useEffect(() => {
    //prettier-ignore
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchTitle}&key=AIzaSyDrxi8MFZjmfVRe2RLFOyBxE77gxONjI6g`)
    .then((response) => {
    setSearch(response.data.items);
    console.log(response.data.items)
});
  }, [searchTitle]);

  return (
    <div className="container">
      <ul>
        {search.map((item, idx) => {
          //return <img src={item.snippet.thumbnails.medium.url} alt="" key={idx} />;
          return (
            <li>
              <div className="box"></div>
              <iframe
                width="430"
                height="280"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="info">
                <h3>{item.snippet.title}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
