import React from "react";
import TitleCard from "./TitleCard";
import "./landingPage.css";
import blogs from "../blogs.json"
import BlogCard from "./BlogCard";
import NavBar from "./NavBar";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const LandingContainer = () => {
  console.log(blogs)
  return (
    <div className="wrapper">
     <TitleCard />
     <NavBar />
     {blogs.map((blog, id) => (
     <BlogCard key={id} blog={blog}/>
     ))}
   <ScrollUpButton style={{backgroundColor: "#36CFBA", border:"none"}} />
    </div>
  );
};

export default LandingContainer;
