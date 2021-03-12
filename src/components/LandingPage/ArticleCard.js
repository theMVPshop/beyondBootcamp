import React from "react";
import Card from "react-bootstrap/Card";
import blogs from "./../../blogs.json";

function ArticleCard(props) {
  const id = parseInt(props.match.params.id);
  const blog = blogs.find((b) => b.id === id);
  console.log(blogs);
  return (
    <div>
      <Card style={{ width: "18rem" }} className="bg-dark text-white">
        <Card.Img style={{ width: "18rem", borderRadius: "5px" }}>
          {blog.image}
        </Card.Img>
        <Card.ImgOverlay>
          <Card.Title>{blog.title}</Card.Title>
          {Object.keys(blog).map((key, idx) => {
            return <Card.Text label={`${key}: ${blog[key]}`}></Card.Text>;
          })}
          <Card.Text>{blog.description}</Card.Text>
          <Card.Text>{blog.date}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ArticleCard;
