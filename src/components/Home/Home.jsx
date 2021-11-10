import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../Assets/home-image.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row lg={3}>
            <Col md={7} className="home-header">
              <h1>
                Hi! I'm <mark>Andrew Jones</mark>
              </h1>
              <h2>Software Engineer</h2>
              <h2>Web Developer</h2>
            </Col>
            <Col md={7} style={{ paddingBottom: 20, float: "left" }}>
              <img
                src={homeImage}
                alt="home pic"
                className="img-fluid"
                width="600"
                height="500"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
