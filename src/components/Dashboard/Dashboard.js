import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./dashboard.css";
import axios from "axios";

export default function Dashboard() {
  const [url, setUrl] = useState();

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    console.log(url);
  };

  const onSubmit = () => {
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

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>URL</Form.Label>
        <Form.Control
          onChange={handleUrlChange}
          placeholder="www.website.com"
        />
        <Button variant="outline-dark" onClick={onSubmit}>
          Dark
        </Button>
      </Form.Group>
    </Form>
  );
}
