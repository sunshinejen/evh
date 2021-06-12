import React, { Component } from "react";
import { Button} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";

class Icons extends Component {
  render() {
      return (
          //component={Link}
          <MDBContainer>
              <MDBRow>
        <MDBCol>
        <Button onClick={() => { alert('clicked') }} href="#text-buttons" ><MDBIcon icon="stethoscope" size="8x" className="buttonSteth"/></Button>
        </MDBCol>
              <MDBCol>
        <Button onClick={() => { alert('clicked') }} href="#text-buttons" ><MDBIcon icon="prescription-bottle-alt" size="8x" className="buttonMeds"/></Button>
              </MDBCol>
              <MDBCol>
        <Button onClick={()=> window.open("https://www.google.com/maps/place/Eastlake+Veterinary+Hospital/@47.6332591,-122.3256309,20.88z/data=!4m12!1m6!3m5!1s0x5490152147b10b23:0x282ff856d9dded19!2sEastlake+Veterinary+Hospital!8m2!3d47.6333133!4d-122.3254899!3m4!1s0x5490152147b10b23:0x282ff856d9dded19!8m2!3d47.6333133!4d-122.3254899", "_blank")} ><MDBIcon icon="map" size="8x" className="buttonMap"/></Button>
        </MDBCol>
        <MDBCol>
        <Button href="tel:+1-310-617-2024" ><MDBIcon icon="mobile-alt" size="8x" className="buttonPhone"/></Button>
             </MDBCol>
              </MDBRow>
          </MDBContainer>
        
      );
  }
}
export default Icons;