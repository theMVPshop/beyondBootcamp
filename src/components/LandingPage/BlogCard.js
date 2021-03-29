import React from "react";
import Card from "react-bootstrap/Card";
// import blogs from "../blogs.json";
import "./landingPage.css";

const BlogCard = (props) => {
//   console.log("BLOGS", blogs);
  return ( 
      <>
            <Card
              key={props.id}
              style={{ height: "25vh", margin: "10px" }}
              className="bg-dark text-white box1"
            >
              <Card.Img style={{ width: "18rem", borderRadius: "5px" }}>
                {/* {blog.image} */}
              </Card.Img>
              <Card.ImgOverlay className="card-overlay">
                <Card.Title style={{fontSize:".9rem"}}>{props.blog.title}</Card.Title>
                {/* description and date only visible on hover */}
                {/* <Card.Text style={{ height: "20px", overflow: "hidden" }}>
                  {blog.description}
                </Card.Text> */}
                <Card.Text>{props.blog.date}</Card.Text>
              </Card.ImgOverlay>
            </Card>
        </>
      );
    };

export default BlogCard;