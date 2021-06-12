import React, { Component } from "react";
import { Button} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";

class AnimalsSeen extends Component {
  render() {
      return (
          <div className="animals">
              <h1>Patients We Treat</h1>
          <MDBContainer>
              <MDBRow>
        <MDBCol>
        <MDBIcon icon="cat" size="8x" className="cat"/>
        </MDBCol>
              <MDBCol>
        <MDBIcon icon="dog" size="8x" className="dog"/>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
              </div>
      );
  }
}
export default AnimalsSeen;