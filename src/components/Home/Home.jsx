import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImage from "../Assets/home-image.jpg"
import './Home.css';

const Home = () => {
  return (
    <div>
      <Container className="home-content">
        <div className="header-name">
          <h1>Hi! I'm Andrew Jones.</h1>
        </div>
        <img src={homeImage} alt="home pic" className="img-fluid" width="500" height="500" />
      </Container>
    </div>
  );
};

export default Home;
