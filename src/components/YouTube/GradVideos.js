import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import NavBar from "../LandingPage/NavBar";
import "./gradVideos.css";

export default function GradVideos() {
  const [backendData, setBackendData] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const [mainVidId, setMainVidId] = useState(null);
  const [vidImage, setVidImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [randomNumber, setRandomNumber] = useState();

  // Use useEffect to call the function that will fetch data from backend and set state with response.  Now we have access to all our businesses and can filter through them as needed.  We then call setIdToState() to got through each item in backendData array and pull out the videoId and set it to its own state.
  useEffect(() => {
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
      const image = item.snippet.thumbnails.standard.url;

      setVideoIds((videoIds) => [...videoIds, id]);
      setVidImage((vidImage) => [...vidImage, image]);
    });
  }, [backendData]);

  // Sets big main video to a random video.
  useEffect(() => {
    const length = videoIds.length;
    setRandomNumber(Math.floor(Math.random() * length));
  }, [videoIds]);

  //set initial video
  useEffect(() => {
    const randomVideoId = videoIds[randomNumber];
    const initialMainVideo = backendData.find(
      (vid) => vid.snippet.resourceId.videoId === randomVideoId
    );
    setMainVidId(randomVideoId);
    setTitle(initialMainVideo?.snippet.title);
    setDescription(initialMainVideo?.snippet.description);
  }, [randomNumber, videoIds, backendData]);

  // Enables user to set the main video on the page to whatever video they click on the scroll bar.
  const setCurrentVideo = (idx) => {
    const { title, description } = backendData[idx].snippet;
    setMainVidId(videoIds[idx]);
    setTitle(title);
    setDescription(description);
  };

  // After main video is done playing this sets a new random video.
  const pickNewVideo = () => {
    setMainVidId(randomNumber);
  };

  // Default settings that are required with react-youtube.  Height and width are the size of the iframe.
  const opts = {
    height: "100%",
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
        <h2 className="gradVideos-title">WELCOME TO GRADTV</h2>
        <p className="gradVideos-text">
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
          grog yardarm hempen halter furl. Swab barque interloper chantey
          doubloon starboard grog black jack gangway rutters. Deadlights jack
          lad schooner scallywag dance the hempen jig carouser broadside cable
          strike colors. Bring a spring upon her cable holystone blow the man
          down spanker Shiver me timbers to go on account lookout.
        </p>
        <div className="gradVideos-mainVid">
          <p className="gradVideos-name">{title}</p>
          <YouTube videoId={mainVidId} opts={opts} onEnd={pickNewVideo} />
        </div>
      </div>
      <div className="gradVideos-rightSide">
        <h4 className="playList-subtitle">VIDEO PLAYLIST</h4>
        <div className="gradVideos-scrollBar">
          {vidImage.map((image, idx) => {
            return (
              <div
                className="gradVideos-smallVidWrapper"
                key={idx}
                onClick={(index) => {
                  setCurrentVideo(idx, index);
                }}
                >
                <img
                  className="gradVidoes-smallVid rounded img-fluid"
                  src={image}
                  alt="Shows snapshot of content"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
