import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./dashboard.css";
import axios from "axios";
import DV from "./DarthVader.png";
import KeywordTag from "./KeywordTag";
import BlogCard from "../LandingPage/BlogCard";

export default function Dashboard() {
  const [url, setUrl] = useState();

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    console.log(url);
  };

  const onSubmitToPeekalink = () => {
    axios
      .post(
        `http://localhost:4001/peekalink`,
        { url },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const selectedTags = (tags) => console.log(tags);

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
            // onChange={handleUrlChange}
            placeholder="Title of Article"
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            // onChange={handleUrlChange}
            placeholder="Description of Article"
          />
          <Form.Label>Site URL</Form.Label>
          <Form.Control
            // onChange={handleUrlChange}
            placeholder="Site of Author"
          />
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option value="" disabled selected hidden>
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
            className="scheduler-input"
            type="date"
            name="dateofbirth"
            id="dateofbirth"
          />
          <div className="dash-example-tiles-container">
            <BlogCard/>
            <h2 className="dash-example-tile">Post Tile 2</h2>
          </div>
          <div className="dash-form-submit-button-container">
            <Button variant="dark" className="dash-form-submit-button">
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
