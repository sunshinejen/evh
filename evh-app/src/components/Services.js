import React, { Component } from "react";
import {Card, Button,CardColumns} from 'react-bootstrap';
class Services extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p> Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum <a href="https://github.com/sunshinejen/evh/projects/1"> Project </a>.
        </p>
        <CardColumns>
  <Card>
    <Card.Img variant="top" src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/05/image_6483441-4.jpg" />
    <Card.Body>
      <Card.Title>Preventative Care</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/05/IMG_7248-e1509996401114.jpg" />
    <Card.Body>
      <Card.Title>Annual Exams</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Radiology</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/05/header-xray-resources.jpg" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
  <Card.Img src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/05/website-photos-237.jpg" />
    <Card.Body>
      <Card.Title>Ultrasound Imaging</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
      </div>
    );
  }
}
 
export default Services;