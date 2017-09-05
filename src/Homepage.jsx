import React from 'react';
import Slideshow from './Slideshow';

const Homepage = props => {
  return (
    <div>
      <Slideshow images={['../download.jpeg', '../download2.jpeg', '../download3.jpeg']} />
    </div>
  );
};

export default Homepage;
