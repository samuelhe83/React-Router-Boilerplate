import React from 'react';

export const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.prevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};
