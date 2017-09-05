import React from 'react';

const Slide = props => {
  let background = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return <div style={background} className="slide" />;
};

export default Slide;
