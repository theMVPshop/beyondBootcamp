import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import NavBar from "../LandingPage/NavBar";
import "./youTubeVideos.css";
import NavBar from "./../LandingPage/NavBar";

export default function YouTubeVideos() {
  const [backendData, setBackendData] = useState([]);
  const [videoIds, setVideoIds] = useState([]);

  // Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.  We then call setIdToState() to got through each item in backendData array and pull out the videoId and set it to its own state.
  useEffect(() => {
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    const callBackendAPI = async () => {
      const response = await fetch(`http://localhost:4001/youtube`);
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };

    callBackendAPI()
      .then((res) => setBackendData(res.items))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    backendData.forEach((item) => {
      const id = item.snippet.resourceId.videoId;
      setVideoIds((videoIds) => [...videoIds, id]);
    });
  }, [backendData]);

  console.log(backendData);
  console.log(videoIds);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
    },
  };

  return (
    <>
    <NavBar/>
    <div className="youtube-body">
      <div className="youtube-navBar">
        <NavBar />
      </div>
      <div className="youtube-navBar">
        <p className="youtube-title">Youtube Videos</p>
      </div>
      <div className="youtube-bigVideoCont">
        <div className="youtube-bigVideo">
          <div>
            <YouTube videoId={videoIds[0]} opts={opts} />
          </div>
        </div>
      </div>
      <div className="youtube-smallVideosCont">
        <div>
          <div className="youtube-smallVideos">
            <div className="youtube-smallVid">
              <YouTube videoId={videoIds[1]} opts={opts} />
            </div>
            <div className="youtube-smallVid">
              <YouTube videoId={videoIds[2]} opts={opts} />
            </div>
            <div className="youtube-smallVid">
              <YouTube videoId={videoIds[3]} opts={opts} />
            </div>
          </div>
        </div>
      </div>
      <div className="youtube-moreVids">
        <a href="http://www.youtube.com">See More Videos</a>
        {/* <button onClick={consoleLogs()}>Console Log Vids</button> */}
      </div>
    </div>
    </>
  );
}
