import React, { Component } from "react";
import VetCard from './VeterinarianCard';
class About extends Component {
  render() {
    return (
      <div>
        <h2>Our Team</h2>
        <p> Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum <a href="https://github.com/sunshinejen/evh/projects/1"> Project </a>.
        </p>
        < VetCard />
      </div>
    );
  }
}
 
export default About;