import React from "react";
import Card from "react-bootstrap/Card";
import "./landingPage.css";
import Image from "react-bootstrap/Image";

const BlogCard = (props) => {
  const blogImage =
    props.blog.image ??
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
  return (
    <>
      <Card className="bg-dark text-white box1 desc-btn-1">
        <Card.Text
          className="blog-card-category"
          style={{ fontSize: ".9rem", color: "whitesmoke" }}
        >
          {props.blog.category}
        </Card.Text>
        <a
          href={props.blog.url}
          target="_blank"
          rel="noreferrer"
          id="title-link-hover"
          style={{ textDecoration: "none" }}
        >
          <div className="container">
            <div id="blog-card-image">
              <Image
                src={`./../../${props.blog.image}`}
                fluid
                style={{ display: "block", width: "100%" }}
              />
            </div>
            <Card.Text
              className="blog-description"
              style={{ fontSize: ".8rem", overflow: "hidden" }}
            >
              <div className="text">{props.blog.description}</div>
            </Card.Text>
          </div>
        </a>
        <Card.Title className="blog-card-title">{props.blog.title}</Card.Title>
      </Card>
    </>
  );
};

export default BlogCard;
