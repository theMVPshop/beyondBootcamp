import React, { useState, useEffect} from "react";
import TitleCard from "./TitleCard";
import "./landingPage.css";
import BlogCard from "./BlogCard";
import NavBar from "./NavBar";
import axios from "axios";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const LandingContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/blogs`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        //TODO: add a toast msg here
      });
  }, []);

  return (
    <div className="wrapper">
      <TitleCard />
      <NavBar />
      {blogs.map((blog, id) => (
        <BlogCard key={id} blog={blog} />
      ))}
      <ScrollUpButton style={{ backgroundColor: "#36CFBA", border: "none" }} />
    </div>
  );
};

export default LandingContainer;
