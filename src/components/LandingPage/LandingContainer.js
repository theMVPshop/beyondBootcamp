import React from "react";
import NavCard from "./NavCard";
import "./landingPage.css";
import blogs from "../blogs.json"
import BlogCard from "./BlogCard";

const LandingContainer = () => {
  console.log(blogs)
  return (
    <div className="wrapper">
     <NavCard />
     {blogs.map((blog, id) => (
     <BlogCard key={id} blog={blog}/>
     ))}
    </div>
  );
};

export default LandingContainer;
