import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Hero.scss'

const Hero: React.FC = () => {

  return (
    <Container className="hero-section-container">
      <Row>
        <Col>
          <h1 className="">Hero Header</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default Hero;
