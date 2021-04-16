import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import NavBar from "../LandingPage/NavBar";
import "./gradVideos.css";

export default function GradVideos() {
  const [backendData, setBackendData] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const [mainVid, setMainVid] = useState(null);
  const [vidImage, setVidImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [randomNumber, setRandomNumber] = useState();

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

  // Find random number between 0 and length of VideoIds array.  Used to get a random video in array.
  const random = () => {
    const length = videoIds.length;
    setRandomNumber(Math.floor(Math.random() * length));
  };

  // Sets big main video to a random video.
  useEffect(() => {
    random();
    // eslint-disable-next-line
  }, [videoIds]);

  useEffect(() => {
    setMainVid(videoIds[randomNumber]);
    setTitle();
    // eslint-disable-next-line
  }, [randomNumber]);

  // Populates VidImage state with thumbnail images pulled from backendData
  useEffect(() => {
    backendData.forEach((item) => {
      const image = item.snippet.thumbnails.standard.url;
      setVidImage((vidImage) => [...vidImage, image]);
    });
    // eslint-disable-next-line
  }, [videoIds]);

  // console.log(backendData);
  // console.log(videoIds);
  // console.log(vidImage);

  // Enables user to set the main video on the page to whatever video they click on the scroll bar.
  const setCurrentVideo = (idx) => {
    const title = backendData[idx].snippet.title;
    const description = backendData[idx].snippet.description;
    setMainVid(videoIds[idx]);
    setTitle(title);
    setDescription(description);
  };
  //   console.log(title);
  //   console.log(description);

  // After main video is done playing this sets a new random video.
  const pickNewVideo = () => {
    setMainVid(randomNumber);
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
        <div className="gradVideos-mainVid">
          <p className="gradVideos-title">GradTV</p>
          <YouTube videoId={mainVid} opts={opts} onEnd={pickNewVideo} />
          <p className="gradVideos-name">{title}</p>
          <a
            className="gradVideos-description gradVideos-linkAnimate "
            href={description}
          >
            Link to Github
          </a>
        </div>
      </div>
      <div className="gradVideos-rightSide">
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
