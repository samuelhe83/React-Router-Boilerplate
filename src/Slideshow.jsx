import React, { Component } from 'react';
import Slide from './Slide';
import { LeftArrow, RightArrow } from './Arrows';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.slideCount = this.props.images.length - 1;
    this.state = { slideNumber: 0 };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    let currentCount = this.state.slideNumber;
    console.log('working');
    if (currentCount < this.slideCount) {
      this.setState({ slideNumber: currentCount + 1 });
    } else if (currentCount === this.slideCount) {
      this.setState({ slideNumber: 0 });
    }
  }

  prevSlide() {
    let currentCount = this.state.slideNumber;
    if (currentCount > 0) {
      this.setState({ slideNumber: currentCount - 1 });
    } else {
      this.setState({ slideNumber: this.slideCount });
    }
  }

  render() {
    return (
      <div className="slideshow">
        <LeftArrow prevSlide={this.prevSlide} className="arrows" />
        <Slide image={this.props.images[this.state.slideNumber]} />
        <RightArrow nextSlide={this.nextSlide} className="arrows" />
      </div>
    );
  }
}

export default Slideshow;
