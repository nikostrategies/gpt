import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TrustedPartners from '../components/TrustedPartners';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <TrustedPartners />
    </>
  );
}

export default Home;