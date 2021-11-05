import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavBar() {

  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
        <Nav className="ml-auto" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link as={Link} to="/Portfolio" >
               Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Portfolio/about" >
               About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
