import React, { Component } from "react";
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData';
import '../styles/gallery-style.css';
import Icons from "../icons/Icons";

class Home extends Component {

  render() {
    return (
      <>
      <div class="container-fluid">
        <ImageSlider slides={SliderData} />
      </div>
        <div class="icons">
          <h1>We strive to help you provide the best care to your pets</h1>
          <h4>Make an appointment, get directions, request a prescription refill, or give us a call</h4>
      <Icons/>
        </div>
        </>
    );
  }
}
export default Home;
