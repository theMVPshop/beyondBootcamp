import React from "react";
import Card from "react-bootstrap/Card";
import "./landingPage.css";
import Image from "react-bootstrap/Image";

const BlogCard = (props) => {
  const blogImage = props.blog.image ?? "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
  return (
    <>
        <Card className="bg-dark text-white box1 desc-btn-1">
          <Card.Text
            className="blog-card-category"
            style={{ fontSize: ".8rem" }}
          >
            {props.blog.category}
          </Card.Text>
          <Image id="blog-card-image" src={blogImage} fluid style={{display: "block", width: "100%"}} />
          <a href={props.blog.url} target="_blank" rel="noreferrer" id="title-link-hover" style={{textDecoration: "none"}}>
          <Card.Title className="blog-card-title">
            {props.blog.title} 
          </Card.Title>
          </a>
          <Card.Text className="blog-description" style={{ fontSize:".8rem", overflow: "hidden" }}>
                  {props.blog.description}
                </Card.Text>
                <Card.Text style={{color: "#999D9F"}}>{props.blog.date}</Card.Text>
        </Card>
    </>
  );
};

export default BlogCard;
