import React from "react";
import Card from "react-bootstrap/Card";
import "./landingPage.css";
import Image from "react-bootstrap/Image";
// import WhatshotIcon from '@material-ui/icons/Whatshot';

const BlogCard = (props) => {
  const image = props.blog.image ?? "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
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
          <Image id="blog-card-image" src={image} fluid />
          <Card.Title className="blog-card-title">
            {props.blog.title}
          </Card.Title>
          {/* <Card.Text className="blog-description" style={{ fontSize:".8rem", overflow: "hidden" }}>
                  {props.blog.description}
                </Card.Text> */}
          {/* <Card.Text><WhatshotIcon/></Card.Text> */}
          {/* </Card.ImgOverlay> */}
        </Card>
      {/* </a> */}
    </>
  );
};

export default BlogCard;
