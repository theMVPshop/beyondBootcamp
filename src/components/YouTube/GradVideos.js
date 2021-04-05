import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import NavBar from "../LandingPage/NavBar";
import "./gradVideos.css";

export default function GradVideos() {
  const [backendData, setBackendData] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const [mainVid, setMainVid] = useState(null);
  const [vidImage, setVidImage] = useState([]);

  // Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.  We then call setIdToState() to got through each item in backendData array and pull out the videoId and set it to its own state.
  useEffect(() => {
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    const callBackendAPI = async () => {
      const response = await fetch(`http://localhost:4001/gradVideos`);
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

  //Waits for backendData state to change (by being populated with list of info from grad videos youtube channel) and then fires this useEffect to go through backendData and pull out all the videoIds needed to embed videos into page.  Sets those video Ids to
  useEffect(() => {
    backendData.forEach((item) => {
      const id = item.snippet.resourceId.videoId;
      setVideoIds((videoIds) => [...videoIds, id]);
    });
  }, [backendData]);

  useEffect(() => {
    setMainVid(videoIds[1]);
  }, [videoIds]);

  //TODO: fix dependency array for this useEffect. It throws an error in the console
  // useEffect(() => {
  //   backendData.forEach((item) => {
  //     const image = item.snippet.thumbnails.standard.url;
  //     setVidImage((vidImage) => [...vidImage, image]);
  //   });
  // }, [videoIds]);

  console.log(backendData);
  console.log(videoIds);
  console.log(vidImage);

  // Find random number between 0 and length of VideoIds array.  Used to get a random video in array.
  //   const randomNumber = () => {
  //     const length = videoIds.length;
  //     return Math.floor(Math.random() * length);
  //   };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
    },
  };

  return (
    <div className="gradVideos-body">
      <div className="gradVideos-navBar">
        <NavBar />
      </div>
      <div className="gradVideos-leftSide">
        <div className="gradVideos-mainVid">
          <YouTube videoId={mainVid} opts={opts} />
        </div>
      </div>
      <div className="gradVideos-rightSide">
        <div className="gradVideos-scrollBar">
          {vidImage.map((image, idx) => {
            return (
              <img key={idx} src={image} alt="Shows snapshot of content"></img>
            );
          })}
        </div>
      </div>
    </div>
  );
}
