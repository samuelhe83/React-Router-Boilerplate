import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Homepage = props => {
  // <Slideshow images={['../download.jpeg', '../download2.jpeg', '../download3.jpeg']} />
  let images = [
    { original: '../download.jpeg', sizes: '5px', thumbnail: '../download.jpeg' },
    { original: '../download2.jpeg' },
    { original: '../download3.jpeg' }
  ];
  return (
    <div className="homepage">
      <div className="banner">
        <p className="bannerText" id="first">
          For Your Aquarium
        </p>
        <p className="bannerText"> No More Water Changing and No More Cleaning *</p>
        <p className="bannerText"> Eliminate Harmful Algal Bloom</p>
      </div>
      <div>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Homepage;
