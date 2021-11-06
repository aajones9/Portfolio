import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../Assets/home-image.jpg";

const Experience = () => {
  return (
    <div>
      <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row lg={3}>
          <Col md={7}>
            <h1>Cerner</h1>
            <p>
              During my time at Cerner I have learned many skills that will help me through the rest of my career. 
            </p>
          </Col>
          <Col md={7}>
            <img
              src={homeImage}
              alt="about pic"
              className="img-fluid"
              width="600"
              height="500"
            />
          </Col>
        </Row>
        <Row>
            <Col>
            <h1>Sailbot</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </Col>
        </Row>
      </Container>
      </Container>
    </div>
  );
};

export default Experience;
