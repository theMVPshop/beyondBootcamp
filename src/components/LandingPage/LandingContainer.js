import React, { useState, useEffect, Suspense } from "react";
import TitleCard from "./TitleCard";
import "./landingPage.css";
import BlogCard from "./BlogCard";
import NavBar from "./NavBar";
import axios from "axios";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import LazyLoad from 'react-lazyload';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <div className="post loading">
    <h4>Loading...</h4>
  </div>
)

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
       <Suspense fallback={<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}>
           {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      <TitleCard />
      <NavBar />
      {blogs.map((blog, id) => (
        <LazyLoad key={id} placeholder={"loading..."}>
        <BlogCard key={id} blog={blog} />
        </LazyLoad>
      ))}
      <ScrollUpButton style={{ backgroundColor: "#36CFBA", border: "none" }} />
      </Suspense>
    </div>
  );
};

export default LandingContainer;
