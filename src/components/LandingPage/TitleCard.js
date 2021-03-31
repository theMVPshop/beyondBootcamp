import React from "react";
import Card from "react-bootstrap/Card";


const TitleCard = () => {
  return (
    <div className="box2">
      <Card style={{ height: "100%" }} className="bg-dark text-white">
        <Card.Body>
          <Card.Title style={{ fontSize: "5rem", padding: "5% 5%"}}>Beyond Bootcamp</Card.Title>
          <Card.Text style={{padding: "5%"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TitleCard;
