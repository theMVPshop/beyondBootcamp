import BlogCard from "./BlogCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toastWrapper } from "../../utils";

const Blogs = () => {
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
        toastWrapper(`Woah! There is an error! ${err}`);
      });
  }, []);
  return blogs.reverse().map((blog, id) => <BlogCard key={id} blog={blog} />);
};

export default Blogs;
