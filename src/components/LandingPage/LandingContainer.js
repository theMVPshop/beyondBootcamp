import React, { Suspense, lazy } from "react";
import TitleCard from "./TitleCard";
import "./landingPage.css";
import NavBar from "./NavBar";
import InitialBlogs from "./InitialBlogs";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
const Blogs = lazy(() => import("./Blogs"));

const LandingContainer = () => {
  return (
    <div className="wrapper">
      <TitleCard />
      <NavBar />
      <InitialBlogs />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Blogs />
      </Suspense>
      <ScrollUpButton style={{ backgroundColor: "#36CFBA", border: "5px solid #205C6F" }} />
    </div>
  );
};

export default LandingContainer;
