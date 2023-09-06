import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero: React.FC = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center pt-5">Hero Header</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default Hero;
