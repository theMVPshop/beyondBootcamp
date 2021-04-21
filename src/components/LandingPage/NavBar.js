import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div className="main-nav sticky-top">
      <Navbar style={{backgroundColor:"#24282d"}} variant="dark">
        <Navbar.Brand href="/">Beyond Bootcamp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/videoTutorials">Video Tutorials</Nav.Link>
          <Nav.Link href="/gradTv">GradTV</Nav.Link>
        </Nav>
        <NavDropdown title="Filter" id="basic-nav-dropdown" drop={'left'}>
          <NavDropdown.Item value="tools">Tools</NavDropdown.Item>
          <NavDropdown.Item value="front_end">Front End</NavDropdown.Item>
          <NavDropdown.Item value="back_end">Back End</NavDropdown.Item>
          <NavDropdown.Item value="tech_news">Tech News</NavDropdown.Item>
          <NavDropdown.Item value="future_of_code">Future of Code</NavDropdown.Item>
          <NavDropdown.Item value="personal_development">
            Personal Development
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
};

export default NavBar;
