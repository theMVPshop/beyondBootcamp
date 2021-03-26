import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavCard = () => {
  return (
    <div className="box2">
      <Card style={{ height: "100%" }} className="bg-dark text-white">
        <Card.Body>
          <Card.Title style={{ fontSize: "5rem", padding: "5% 5%"}}>Beyond Bootcamp</Card.Title>
          <Card.Text></Card.Text>
          <div className="main-nav">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">BB</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Tutorials</Nav.Link>
                <Nav.Link href="#pricing">Social Links</Nav.Link>
                <NavDropdown title="Search" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NavCard;
