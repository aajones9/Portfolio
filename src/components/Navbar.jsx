import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
        <Nav className="nav-def" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="nav-def"  >
               Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" >
               About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/experience" >
               Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/resume" >
               Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
