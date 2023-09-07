import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ContentSection.scss'

const ContentSection: React.FC = () => {

  return (
    <Container className="content-section-container">
      <Row>
        <Col>
          <h1 className="">Content Section of page!</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default ContentSection;
