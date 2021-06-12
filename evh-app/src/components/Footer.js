import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import { Popover } from '@varld/popover'
//import ClearIcon from '@material-ui/icons/Clear';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">

      <MDBContainer fluid className="text-center text-md-left">
        
        <Popover popover={({ visible, open, close }) => {
          return (
            <div>
              <ul>
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesda</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
              </ul>

              <button onClick={() => close()}>
          </button>
          
            </div>
          )
        }}>

          <button>I have a popover</button>
        </Popover>
      </MDBContainer>
      <div class="container-fluid" className="footer-copyright text-center py-3">
        <MDBContainer>
          <MDBRow>
            <MDBCol>Eastlake Veterinary Hospital</MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol> | HOURS |CONTACT | LOCATION </MDBCol>
          </MDBRow>
          </MDBContainer>
      <MDBContainer>
        <MDBRow center>
          <MDBCol size="1" ><SocialIcon url="https://twitter.com/jaketrent"/></MDBCol>
          <MDBCol size="1" ><SocialIcon url="https://www.instagram.com/eastlakevetpets/" /></MDBCol>
          <MDBCol size="1"  ><SocialIcon url="mailto:eastlakevet@comcast.net" network="email" /></MDBCol>
          <MDBCol size="1" ><SocialIcon url="https://www.facebook.com/eastlake.veterinary.hospital/" /></MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer> <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a></MDBContainer>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Eastlake Veterinary Hospital
        </MDBContainer>
        </div>
    </MDBFooter>
  );
}

export default FooterPage;