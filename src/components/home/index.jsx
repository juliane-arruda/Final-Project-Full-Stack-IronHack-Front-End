import React from 'react';

import Intro from './intro';
import About from './about';
import HowItWorks from './howItWorks';
import Instructions from './instructions';
import Contact from './contact';


const Home = () => (
  <div>
    <Intro />
    <About />
    <HowItWorks />
    <Instructions />
    <Contact />
  </div>
);

export default Home;