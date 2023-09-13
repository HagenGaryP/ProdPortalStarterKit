import React from 'react';
import Hero from '../../containers/Hero/Hero';

import './products.scss'
import ProductsSection from '../../containers/ProductsSection/ProductsSection';

const Products: React.FC = () => {

  return (
    <>
      {/* sections of the product page */}
      <div className="products-hero-wrapper">
        <Hero />
      </div>
      <div className="products-content-wrapper">
        <ProductsSection />
      </div>
    </>
  );
}

export default Products;
