/**
 * Main App component
 */

import React from 'react';
import NavbarComponent from './components/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import AppRouter from './routes';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
        <main>
          <AppRouter />
        </main>
      <Footer />
    </>
  );
}

export default App;
