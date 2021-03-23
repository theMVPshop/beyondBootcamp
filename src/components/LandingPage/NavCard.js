import React from "react";
import Card from "react-bootstrap/Card";


const NavCard = () => {
  return (
    <div>
      <Card style={{ width: "36rem", height: "20rem" }} className="bg-dark text-white">
          <Card.Body>
          <Card.Title>Beyond Bootcamp</Card.Title>
          <Card.Text>nav stuff nav stuff</Card.Text>
          <div className="main-nav">
          <Card.Link href="#">About</Card.Link>
          <Card.Link href="#">Tutorials</Card.Link>
          <Card.Link href="#">Tweeters</Card.Link>
          </div>
          </Card.Body>
      </Card>
      </div>
  );
}

export default NavCard;
