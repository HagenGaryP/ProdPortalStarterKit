import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsSection: React.FC = () => {

  return (
    <Container className="">
      <Row className="pt-5">
        <Col className="">
          <p className="text-center">PRODUCTS</p>
        </Col>
      </Row>
      <Row className="d-flex align-items-stretch gy-2 gx-2 pb-5 pt-5 justify-content-center ps-lg-5 pe-lg-5">
        {data.map((el, index) => (
          <Col xs={10} lg={5} key={index} className="">
            <ProductCard data={el} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductsSection;

// dummy data for products
const data = [
  {
    name: 'Product 1',
    id: 1,
    description: 'description 1',
    quantity: 5,
    price: 100,
    category: 'Category 1',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
  {
    name: 'Product 2',
    id: 2,
    description: 'description 2',
    quantity: 5,
    price: 100,
    category: 'Category 2',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
  {
    name: 'Product 3',
    id: 3,
    description: 'description 3',
    quantity: 5,
    price: 100,
    category: 'Category 3',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
  {
    name: 'Product 4',
    id: 4,
    description: 'description 4',
    quantity: 5,
    price: 400,
    category: 'Category 4',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
  {
    name: 'Product 5',
    id: 5,
    description: 'description 5',
    quantity: 5,
    price: 100,
    category: 'Category 5',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
  {
    name: 'Product 6',
    id: 6,
    description: 'description 6',
    quantity: 5,
    price: 100,
    category: 'Category 3',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  },
]
