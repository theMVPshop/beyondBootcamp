import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./dashboard.css";
import axios from "axios";
import DV from "./DarthVader.png";
import KeywordTag from "./KeywordTag";
import BlogCard from "../LandingPage/BlogCard";
import toast, { toastConfig } from "react-simple-toasts";

toastConfig({
  position: "right",
});

export default function Dashboard() {
  const initialBlogState = {
    blog: {
      title: "",
      description: "",
      url: "",
      category: "",
      tags: [],
      date: "",
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
            setState(initialBlogState);
            setPeekalinkUrl("");
          }
        });
    } catch (error) {
      toast(`Uh oh! There is an error! ${error}`);
    }
  };
  const { title, description, url, category, date } = state.blog;
  return (
    <>
      <img src={DV} alt="Darth Vader emoji" className="dash-image" />
      <h3 className="dash-title"> Keith! I am your Dashboard.</h3>
      <Form className="dash-body">
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
                required
              />
            </Col>
            <Col sm={2}>
              <Button
                id="blog-url-input-button"
                variant="outline-dark"
                onClick={onSubmitToPeekalink}
              >
                Peekalink
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="Title of Article"
            name="title"
            value={title}
            required
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
            required
          />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Site URL</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder="URL"
            name="url"
            value={url}
            required
          />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            value={category}
            name="category"
            required
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
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Keyword</Form.Label>
          <KeywordTag selectedTags={selectedTags} />
        </Form.Group>
        <Form.Group className="dash-form">
          <Form.Label>Schedule Publish Date</Form.Label> <br />
          <input
            onChange={handleChange}
            className="scheduler-input"
            type="date"
            name="date"
            id="date"
            value={date}
            required
          />
        </Form.Group>
        <div className="dash-example-tiles-container">
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
