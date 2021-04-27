import React from "react";
import Card from "react-bootstrap/Card";

const TitleCard = () => {
  return (
    <Card className="bg-dark text-white box2 box1">
      <Card.Body>
        <Card.Title
          className="title-card-text"
          style={{ fontSize: "5rem", padding: "2% 2%" }}
        >
          Beyond <br /> Bootcamp
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TitleCard;
