import React from 'react';
import Hero from '../../containers/Hero/Hero';
import ContentSection from '../../containers/ContentSection/ContentSection';

import './Home.scss'

const Home: React.FC = () => {

  return (
    <>
      {/* sections of the home page */}
      <div className="home-hero-wrapper">
        <Hero />
      </div>
      <div className="home-content-wrapper">
        <ContentSection />
      </div>
    </>
  );
}

export default Home;
