/**
 * Router should be setup here
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Products from '../views/Products/Products';


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default AppRouter;
