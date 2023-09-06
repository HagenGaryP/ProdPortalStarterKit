/**
 * Main App component
 */

import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
import Home from './views/Home/Home';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Home />
    </>
  );
}

export default App;
