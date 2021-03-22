import React from "react";
import Card from "react-bootstrap/Card";
import blogs from "./../blogs.json";

const ArticleCard = () => {
  console.log('BLOGS', blogs)
  return (
    <div>
      {blogs.map((blog, id) => (
      <Card key={id} style={{ width: "18rem", height: "14rem" }} className="bg-dark text-white">
        <Card.Img style={{ width: "18rem", borderRadius: "5px" }}>
          {/* {blog.image} */}
        </Card.Img>
        <Card.ImgOverlay className="card-overlay">
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text style={{height:"50px", overflow: "hidden"}}>{blog.description}</Card.Text>
          <Card.Text>{blog.date}</Card.Text>
        </Card.ImgOverlay>
      </Card>
      ))}
      </div>
  );
}

export default ArticleCard;
