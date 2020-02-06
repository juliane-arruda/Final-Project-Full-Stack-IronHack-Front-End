import React from 'react';

import Intro from './intro';
import About from './about';
import HowItWorks from './howItWorks';
import Instructions from './instructions';
import Contact from './contact';
import Depositions from './depositions';


const Home = () => (
  <div>
    <Intro />
    {/* <About /> */}
    <HowItWorks />
    <Instructions />
    <Depositions/>
    <Contact />
  </div>
);

export default Home;