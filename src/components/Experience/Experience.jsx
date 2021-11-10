import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import cernerImage from "../Assets/cerner.png";
import sailbotTeam from "../Assets/sailbot-team.jpg";
import sailbotBoat from "../Assets/sailbot-boat.jpg";
import useBreakpoint from "../helpers/use-breakpoint";

const Experience = () => {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row lg={3} style={{ padding: "30px" }}>
            <Col md={7}>
              <h1>Professional Skillset</h1>
              {
                <ListGroup
                  horizontal={'md'}
                >
                  <ListGroup.Item variant="dark">Java</ListGroup.Item>
                  <ListGroup.Item variant="dark">Javascript</ListGroup.Item>
                  <ListGroup.Item variant="dark">Ruby</ListGroup.Item>
                  <ListGroup.Item variant="dark">Python</ListGroup.Item>
                  <ListGroup.Item variant="dark">HTML</ListGroup.Item>
                  <ListGroup.Item variant="dark">T-SQL</ListGroup.Item>
                  <ListGroup.Item variant="dark">React</ListGroup.Item>
                  <ListGroup.Item variant="dark">Rails</ListGroup.Item>
                  <ListGroup.Item variant="dark">Docker</ListGroup.Item>
                  <ListGroup.Item variant="dark">Node.js</ListGroup.Item>
                  <ListGroup.Item variant="dark">AWS</ListGroup.Item>
                  <ListGroup.Item variant="dark">Git</ListGroup.Item>
                  <ListGroup.Item variant="dark">Jenkins</ListGroup.Item>
                </ListGroup>
              }
            </Col>
          </Row>
          <Row lg={3} style={{ padding: "30px" }}>
            <Col md={7}>
              <h1>Cerner</h1>
              <p>
              During my time at Cerner I have learned many skills that will help me through the rest of my career. 
              I have done everything from design, development, and support of existing apps. 
              I have also led a project myself and come into projects that are in progress, 
              having to learn from the engineers that have been working on it. 
              Through Cerner, I have grown into a well rounded engineer that can excel in any situation. 
              </p>
            </Col>
            <Col md={7}>
              <img
                src={cernerImage}
                alt="about pic"
                className="img-fluid"
                width="600"
                height="500"
              />
            </Col>
          </Row>
          <Row lg={3} style={{ padding: "30px" }}>
            <Col>
              <h1>Sailbot</h1>
              During my time at Iowa State University, I was the Electonics Team
              Lead on Sailbot (The Autonomous Sailboat Project). The goal of
              this team was to create a fully autonomous sailboat that could
              complete various tasks during competition. Besides learning a
              wealth of technical skills, I learned how work with a team made up
              of many other engineering disciplines.
            </Col>
            <Col md={7}>
              <img
                src={sailbotTeam}
                alt="about pic"
                className="img-fluid"
                width="600"
                height="500"
              />
            </Col>
            <Col md={7}>
              <img
                src={sailbotBoat}
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

export default Experience;
