import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import images from '../technicalImages';
const Technical = props => {
  return (
    <div className="technical">
      <ImageGallery items={images} />
    </div>
  );
};

export default Technical;
