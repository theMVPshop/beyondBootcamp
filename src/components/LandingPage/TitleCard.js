import React from "react";
import Card from "react-bootstrap/Card";

const TitleCard = () => {
  return (
    <Card className="bg-dark text-white box2 box1">
      <Card.Body>
        <Card.Title
          className="title-card-text"
          style={{ fontSize: "5.3rem", padding: "2% 2%", fontWeight: "900" }}
        >
          BEYOND <br /> BOOTCAMP
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TitleCard;
