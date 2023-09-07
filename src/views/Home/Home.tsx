import React from 'react';
import Hero from '../../containers/Hero/Hero';
import ContentSection from '../../containers/ContentSection/ContentSection';

const Home: React.FC = () => {

  return (
    <>
    {/* sections of the home page */}
    <Hero />
    <ContentSection />
    </>
  );
}

export default Home;
