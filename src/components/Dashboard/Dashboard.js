import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./dashboard.css";
import axios from "axios";
import DV from "./DarthVader.png";
import KeywordTag from "./KeywordTag";
import BlogCard from "../LandingPage/BlogCard";
import { toastWrapper } from "../../utils";

import NavBar from "../LandingPage/NavBar";

export default function Dashboard() {
  const initialBlogState = {
    blog: {
      title: "",
      description: "",
      url: "",
      category: "",
      tags: [],
    },
  };
  // URL that we are sending to API
  const [peekalinkUrl, setPeekalinkUrl] = useState("");

  // Response from API
  const [state, setState] = useState(initialBlogState);

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
  const onSubmitToPeekalink = async (e) => {
    e.preventDefault();
    try {
      const blog = await axios
        .post(
          `http:///peekalink`,
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
      setState({ blog: { ...state.blog, title, description, url, image } });
    } catch (error) {
      toastWrapper(`Woah! There is an error! ${error}`);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `http:///blogs`,
          { ...state.blog },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          if (res.status === 200) {
            toastWrapper("Congrats! You just created a new post!");
            setState(initialBlogState);
            setPeekalinkUrl("");
          }
        });
    } catch (error) {
      toastWrapper(`Uh oh! There is an error! ${error}`);
    }
  };

  // Need to add date below once functionality is created.
  const { title, description, url, category, tags } = state.blog;
  return (
    <>
      <NavBar />
      <img src={DV} alt="Darth Vader emoji" className="dash-image" />
      <h3 className="dash-title"> Keith! I am your Dashboard.</h3>
      <Form
        className="dash-body"
        id="dash-api-submit-form"
        onSubmit={onSubmitToPeekalink}
      >
        <Form.Group>
          <Form.Row className="dash-form">
            <Form.Label>Blog URL</Form.Label>
          </Form.Row>
          <Form.Row className="dash-form">
            <Col sm={10}>
              <Form.Control
                onChange={handleUrlChange}
                placeholder="www.website.com"
                className="dash-blog-url-form-control"
                value={peekalinkUrl}
                required={true}
              />
            </Col>
            <Col sm={2}>
              <Button
                id="blog-url-input-button"
                variant="outline-dark"
                type="submit"
              >
                Peekalink
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
      <Form className="dash-body">
        <Form.Group className="dash-form">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="Title of Article"
            name="title"
            value={title}
            required={true}
          />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleChange}
            name="description"
            placeholder="Description of Article"
            value={description}
            required={true}
          />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Site URL</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="URL"
            name="url"
            value={url}
            required={true}
          />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            value={category}
            name="category"
            required={true}
            placeholder="Select a Category"
          >
            <option value="" disabled hidden>
              Select a Category
            </option>
            <option value="tools">Tools</option>
            <option value="front_end">Front End</option>
            <option value="back_end">Back End</option>
            <option value="tech_news">Tech News</option>
            <option value="future_of_code">Future of Code</option>
            <option value="personal_development">Personal Development</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Keyword</Form.Label>
          <KeywordTag
            className="dash-form-keyword"
            selectedTags={selectedTags}
            tags={tags}
          />
        </Form.Group>
        {/* ***** Hidden until functionality is given ******* */}
        {/* <Form.Group className="dash-form">
          <Form.Label>Schedule Publish Date</Form.Label> <br />
          <input
            onChange={handleChange}
            className="scheduler-input"
            type="date"
            name="date"
            id="date"
            value={date}
            required={true}
          />
        </Form.Group> */}
        <div id="dash-example-tiles-container">
          <BlogCard blog={state.blog} />
        </div>
        <div className="dash-form-submit-button-container">
          <Button
            id="dash-form-submit-button"
            variant="primary"
            onClick={onSubmitForm}
          >
            Post blog
          </Button>
        </div>
      </Form>
    </>
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
