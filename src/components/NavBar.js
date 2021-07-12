import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "../css/navbar.css";
import "../js/navbar";
function NavBar() {
  return (
    <Navbar className="navbar-section">
      <Link to="home" smooth={true}>
        {" "}
        <Navbar.Brand href="#home" className="brand">
          <span className="red">a</span>
          <span className="yellow">y</span>
          <span className="green">an</span>
          <span className="blue">ac.</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="about" smooth={true}>
            <Nav.Link href="#about" className="nav-item">
              About
            </Nav.Link>
          </Link>
          <Link to="project" smooth={true}>
            {" "}
            <Nav.Link href="#project" className="nav-item">
              Projects
            </Nav.Link>
          </Link>
          <Link to="skill" smooth={true}>
            <Nav.Link href="#skill" className="nav-item">
              Skills
            </Nav.Link>
          </Link>
          <Link to="education" smooth={true}>
            <Nav.Link href="#edu" className="nav-item">
              Education
            </Nav.Link>
          </Link>
          <NavDropdown
            title="Handles"
            id="basic-nav-dropdown"
            className="nav-item"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="primary" className="contact-button">
          Contact
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
