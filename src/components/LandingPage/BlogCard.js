import React from "react";
import Card from "react-bootstrap/Card";
// import blogs from "../blogs.json";
import "./landingPage.css";
// import WhatshotIcon from '@material-ui/icons/Whatshot';

const BlogCard = (props) => {
  //   console.log("BLOGS", blogs);
  return (
    <>
      <Card key={props.id} className="bg-dark text-white box1">
        <Card.Img>{/* {props.blog.image} */}</Card.Img>
        <Card.ImgOverlay className="card-overlay">
          <Card.Title style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            {props.blog.title}
          </Card.Title>
          {/* <Card.Text className="blog-description" style={{ fontSize:".6rem", overflow: "hidden" }}>
                  {props.blog.description}
                </Card.Text> */}
          <Card.Text style={{ fontSize: ".8rem" }}>{props.blog.date}</Card.Text>
          {/* <Card.Text><WhatshotIcon/></Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default BlogCard;
