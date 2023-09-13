import React from 'react';
import Card from 'react-bootstrap/Card';

interface ProductCardProps {
  data: {
    name: string;
    id: number;
    description: string;
    quantity: number;
    price: number;
    category: string;
    keywords: string[];
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { name, id, description, quantity, price, category, keywords } = data;
  return (
    <Card
      className="d-flex align-items-stretch align-items-start pt-3 pt-lg-1 product-card"
    >
      <Card.Body>
        <Card.Title className="product-card-title">{name}</Card.Title>
        <Card.Text className='pt-3 pb-3 product-card-text'>{description}</Card.Text>

        <p className="">Details</p>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
