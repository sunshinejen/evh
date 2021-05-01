import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button,CardColumns} from 'react-bootstrap';
 
class VetCard extends Component {
  render() {
    return (
            <CardColumns>
            <Card>
            <Card.Img variant="top" src="https://eastlakevethospital.com/cms/wp-content/uploads/2015/10/IMG_7720.jpg" />
            <Card.Body>
                <Card.Title>Our Veterinarians </Card.Title>
                <Card.Text>
                    Explore our veterinarians’ biographies and learn about the individuals who make our hospital an excellent choice for your pet’s care..{" "}
                </Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Card.Img variant="top" src="https://eastlakevethospital.com/cms/wp-content/uploads/2019/03/IMG-1161-e1552935501480.jpg" />
            <Card.Body>
                <Card.Title>Our Support Team</Card.Title>
                <Card.Text>
                Card Text his card has supporting text below as a natural lead-in to
                additional content.{" "}
                </Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Card.Img variant="top" src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/05/IMG_7534.jpg" />
            <Card.Body>
                <Card.Title>Client Services</Card.Title>
                <Card.Text>
                Card Text his card has supporting text below as a natural lead-in to
                additional content.{" "}
                </Card.Text>
            </Card.Body>
            </Card>
            </CardColumns>
    );
  }
}
 
export default VetCard;