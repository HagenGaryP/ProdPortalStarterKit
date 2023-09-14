/**
 * Main App component
 */

import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
// import Home from './views/Home/Home';
import Footer from './containers/Footer/Footer';
import Products from './views/Products/Products';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      {/* <Home /> */}
      <Products />
      <Footer />
    </>
  );
}

export default App;
