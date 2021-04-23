import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div className="main-nav sticky-top">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Beyond Bootcamp</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/videoTutorials">Video Tutorials</Nav.Link>
          <Nav.Link href="/gradTv">GradTV</Nav.Link>
        </Nav>
        {/* <NavDropdown title="Filter" id="basic-nav-dropdown" drop={"left"}>
          <NavDropdown.Item href="#action/3.1">Tools</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Front End</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Back End</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Tech News</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Future of Code</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">
            Personal Development
          </NavDropdown.Item>
        </NavDropdown> */}
      </Navbar>
    </div>
  );
};

export default NavBar;
