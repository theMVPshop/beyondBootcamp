import React from "react";
import Card from "react-bootstrap/Card";
import "./landingPage.css";
import Image from "react-bootstrap/Image";

const BlogCard = (props) => {
  //   console.log("BLOGS", blogs);
  const image = props.blog.image ?? "https://images.punkapi.com/v2/23.png";
  return (
    <>
      {/* <a href={props.blog.url}> */}
        <Card className="bg-dark text-white box1 desc-btn-1">
          {/* <Card.Img src={props.blog.image} alt="Card image"/>
        <Card.ImgOverlay> */}
          <Card.Text
            className="blog-card-category"
            style={{ fontSize: ".8rem" }}
          >
            {props.blog.category}
          </Card.Text>
          {/* <Image id="blog-card-image" src={props.blog.image} fluid /> */}
          <Image id="blog-card-image" src={image} style={{borderRadius: "5px"}} fluid />
          <Card.Title className="blog-card-title">
            {props.blog.title}
          </Card.Title>
          {/* <Card.Text className="blog-description" style={{ fontSize:".8rem", overflow: "hidden" }}>
                  {props.blog.description}
                </Card.Text> */}
          {/* </Card.ImgOverlay> */}
        </Card>
      {/* </a> */}
    </>
  );
};

export default BlogCard;
