import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import images from '../images.json';

const Homepage = props => {
  return (
    <div className="homepage">
      <div className="banner">
        <p className="bannerText" id="first">
          For Your Aquarium
        </p>
        <p className="bannerText"> No More Water Changing and No More Cleaning*</p>
        <p className="bannerText"> Eliminate Harmful Algal Bloom</p>
      </div>
      <div>
        <ImageGallery items={images} autoPlay={true} slideInterval={5000} />
      </div>
    </div>
  );
};

export default Homepage;
