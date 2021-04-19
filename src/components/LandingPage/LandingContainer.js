import React from "react";
import TitleCard from "./TitleCard";
import "./landingPage.css";
import NavBar from "./NavBar";
import Blogs from "./Blogs";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
// import LazyLoad from 'react-lazy-load';
const LandingContainer = () => {
  return (
    <div className="wrapper">
      <TitleCard />
      <NavBar />
      {/* <LazyLoad> */}
      <Blogs />
      {/* </LazyLoad> */}
      <ScrollUpButton style={{ backgroundColor: "#36CFBA", border: "none" }} />
    </div>
  );
};

export default LandingContainer;
