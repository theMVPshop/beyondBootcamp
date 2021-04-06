import React from "react";
import Card from "react-bootstrap/Card";
import "./landingPage.css";
import Image from "react-bootstrap/Image";
// import WhatshotIcon from '@material-ui/icons/Whatshot';

const BlogCard = (props) => {
  //   console.log("BLOGS", blogs);
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
          <Image id="blog-card-image" src={props.blog.image} fluid />
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
