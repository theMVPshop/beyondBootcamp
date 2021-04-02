import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./dashboard.css";
import axios from "axios";
import DV from "./DarthVader.png";
import KeywordTag from "./KeywordTag";
import BlogCard from "../LandingPage/BlogCard";
import toast, { toastConfig } from "react-simple-toasts";

export default function Dashboard() {
  // URL that we are sending to API
  const [peekalinkUrl, setPeekalinkUrl] = useState("");

  // Response from API
  const [state, setState] = useState({
    blog: {
      title: "",
      description: "",
      url: "",
      category: "",
      tags: [],
      date: "",
    },
  });
  console.log("state:", state);
  console.log("url", peekalinkUrl);

  // Sets state and handles selected tags in KeywordTag component
  const selectedTags = (tags) =>
    setState({
      ...state,
      blog: { ...state.blog, tags: [...tags] },
    });

  // handles changes only for URL that we send to API
  const handleUrlChange = (e) => {
    setPeekalinkUrl(e.target.value);
  };

  // handles changes for inputs we receive from API
  const handleChange = (evt) => {
    const value = evt.target.value || "";
    setState({
      ...state,
      blog: { ...state.blog, [evt.target.name]: value },
    });
  };

  // call to API
  const onSubmitToPeekalink = async () => {
    try {
      const blog = await axios
        .post(
          `http://localhost:4001/peekalink`,
          { url: peekalinkUrl },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          return res.data;
        });
      // Destructing keys being used from API response
      const {
        title,
        description,
        url,
        image: { url: image },
      } = blog;
      // Setting state from API
      setState({ blog: { title, description, url, image } });
    } catch (error) {
      toast(`Woah! There is an error! ${error}`);
    }
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `http://localhost:4001/blogs`,
          { ...state.blog },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          if (res.status === 200) {
            toast("Congrats! You just created a new post!");
            setState({
              blog: {
                title: "",
                description: "",
                url: "",
                category: "",
                tags: [],
                date: "",
              },
            });
            setPeekalinkUrl("")
          }
        });
    } catch (error) {
      toast(`Uh oh! There is an error! ${error}`);
    }
  };

  toastConfig({
    position: "right",
  });

  return (
    <div>
      <img src={DV} alt="Darth Vader emoji" className="dash-image" />
      <h3 className="dash-title"> Keith! I am your Dashboard.</h3>
      <Form className="dash-body">
        <Form.Group className="dash-form">
          <Form.Label>Blog URL</Form.Label>
          <span className="blog-url-input-group">
            <Form.Control
              onChange={handleUrlChange}
              placeholder="www.website.com"
              className="dash-blog-url-form-control"
              value={peekalinkUrl}
            />
            <Button
              id="blog-url-input-button"
              variant="outline-dark"
              onClick={onSubmitToPeekalink}
            >
              Peekalink
            </Button>
          </span>
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="Title of Article"
            name="title"
            value={state.blog.title}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleChange}
            name="description"
            placeholder="Description of Article"
            value={state.blog.description}
          />
          <Form.Label>Site URL</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="URL"
            name="url"
            value={state.blog.url}
          />
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            value={state.blog.category}
            name="category"
          >
            <option defaultValue=" " disabled hidden>
              Select a Category
            </option>
            <option>Tools</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>Tech News</option>
            <option>Future of Code</option>
            <option>Personal Development</option>
          </Form.Control>
          <Form.Label>Keyword</Form.Label>
          <KeywordTag selectedTags={selectedTags} />
          <Form.Label>Schedule Publish Date</Form.Label> <br />
          <input
            onChange={handleChange}
            className="scheduler-input"
            type="date"
            name="date"
            id="date"
            value={state.blog.date}
          />
          <div className="dash-example-tiles-container">
            <BlogCard blog={state.blog} />
          </div>
          <div className="dash-form-submit-button-container">
            <Button
              variant="dark"
              className="dash-form-submit-button"
              onClick={onSubmitForm}
            >
              Post blog
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

// KEITHS CODE TO ADD LATER
// Peekalink has to run before this code runs, and this code is helping find keywords within the title and description.
// for (let row = 0; row < rows.length; row++) {
//   let keys = [];
//   let text2search = (rows[row][1] + " " + rows[row][2]).toLowerCase();
//   console.log(text2search);
//   for (let keyword = 0; keyword < keywordz.length; keyword++) {
//     if (text2search.includes(keywordz[keyword])) {
//       keys.push(keywordz[keyword]);
//     }
//   }
//   console.log(keys);
//   rows[row].push;
// }
