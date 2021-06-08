import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn, MDBIcon} from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Order Prescriptions</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Meet the Team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Services</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                  <MDBBtn tag="a" size="lg" floating gradient="purple">
        <MDBIcon icon="bolt" />
      </MDBBtn>
      <MDBBtn tag="a" floating gradient="peach">
        <MDBIcon icon="leaf" />
      </MDBBtn>
      <MDBBtn tag="a" size="sm" floating gradient="blue">
        <MDBIcon icon="star" />
      </MDBBtn>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;