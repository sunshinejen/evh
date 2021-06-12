import React, { Component } from "react";
import ImageSlider from './ImageSlider';
import {SliderData} from './SliderData';
import '../styles/gallery-style.css';
import Icons from "../icons/Icons";
import AnimalsSeen from "../icons/AnimalsSeen";


class Home extends Component {

  render() {
    return (
      <>
      <div class="container-fluid">
        <ImageSlider slides={SliderData} />
        </div>
          <AnimalsSeen />
        <div class="icons">
          <h1>We strive to help you provide the best care to your pets</h1>
          <small class="text-muted">Make an appointment, get directions, request a prescription refill, or give us a call</small>
      <Icons/>
        </div>
        </>
    );
  }
}
export default Home;
