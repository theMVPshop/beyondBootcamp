import React, { useState, useEffect } from "react";
import YouTube from "react-youtube-embed";
import "./youTubeVideos.css";

export default function YouTubeVideos() {
  const [backendData, setBackendData] = useState([]);
  const [videoIds, setVideoIds] = useState([]);

  // Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.  We then call setIdToState() to got through each item in backendData array and pull out the videoId and set it to its own state.
  useEffect(() => {
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    const callBackendAPI = async () => {
      const response = await fetch("/youtube");
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };
    callBackendAPI()
      .then((res) => setBackendData(res.items))
      .then(setIdToState())
      .catch((err) => console.log(err));
  }, []);

  const setIdToState = () => {
    backendData.forEach((item) => {
      const id = item.snippet.resourceId.videoId;
      setVideoIds((videoIds) => [...videoIds, id]);
    });
  };

  console.log(backendData);
  console.log(videoIds);

  return (
    <div className="youtube-body">
      <div className="youtube-bigVideoCont">
        <div className="youtube-bigVideo">
          <div>
            <YouTube id="KDBP4FKXOXs" />
          </div>
        </div>
      </div>
      <div className="youtube-smallVideosCont">
        <div>
          <div className="youtube-smallVideos">
            <div className="youtube-smallVid">
              <YouTube id="KDBP4FKXOXs" />
            </div>
            <div className="youtube-smallVid">
              <YouTube id="KDBP4FKXOXs" />
            </div>
            <div className="youtube-smallVid">
              <YouTube id="KDBP4FKXOXs" />
            </div>
          </div>
        </div>
      </div>
      <div className="youtube-moreVids">
        <a href="http://www.youtube.com">See More Videos</a>
        {/* <button onClick={consoleLogs()}>Console Log Vids</button> */}
      </div>
    </div>
  );
}
