import React, { Component } from "react";
import MultiStepForm from "./foodCalculator/FoodCalcForm";
import PrescriptionForm from "./login/PrescriptionForm";
 
class Resources extends Component {
  render() {
    return (
      <div class="container-fluid">
        <h2>Resources</h2>
        <p> Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum <a href="https://github.com/sunshinejen/evh/projects/1"> Project </a>.
        </p>
        <PrescriptionForm />
        <p>
          <MultiStepForm/>
        </p>
      </div>
    );
  }
}
 
export default Resources;