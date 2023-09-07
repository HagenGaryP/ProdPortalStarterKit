import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface FooterProps {
  // You can add properties here if required.
  year?: number;
}

const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are passionate about delivering the best products to our customers.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Products</a></li>
              <li><a href="#!">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>
              123 Street Name<br />
              City, State 12345<br />
              Email: example@example.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            &copy; {year} ProductPortal. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
