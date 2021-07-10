import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "../css/navbar.css";
function NavBar() {
  return (
    <Navbar className="navbar-section">
      <Navbar.Brand href="#home" className="brand">
        <span className="red">a</span>
        <span className="yellow">y</span>
        <span className="green">an</span>
        <span className="blue">ac.</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about" className="nav-item">
            About
          </Nav.Link>
          <Nav.Link href="#project" className="nav-item">
            Projects
          </Nav.Link>
          <Nav.Link href="#skill" className="nav-item">
            Skills
          </Nav.Link>
          <Nav.Link href="#edu" className="nav-item">
            Education
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-item">
            Contact
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        <Button variant="primary">Search</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
