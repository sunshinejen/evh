import React, { Component } from "react";
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData';
import '../styles/gallery-style.css';

class Home extends Component {
  render() {
    return <ImageSlider slides={SliderData} />;
    
  }
}
export default Home;