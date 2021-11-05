import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../Assets/mountain-image.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row lg={3}>
          <Col md={7}>
            <h1>Andrew Jones</h1>
            <p>My name is Andrew Jones. During my free time I enjoy running, rock climbing, gaming and working on personal projects.</p>
          </Col>
          <Col md={7}>
            <img
              src={aboutImage}
              alt="about pic"
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
