import React, { Component } from "react";
import VetCard from './VeterinarianCard';
import {Card, Button,CardColumns} from 'react-bootstrap';
class About extends Component {
  render() {
    return (
      <div>
        <h2>Our Team</h2>
        <p> Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum <a href="https://github.com/sunshinejen/evh/projects/1"> Project </a>.
        </p>
        <Card className="">
        <Card.Body>
          <Card.Img variant="bottom" src="https://eastlakevethospital.com/cms/wp-content/uploads/2011/04/IMG_8520-e1510278160203.jpg" alt="Card image" />
            <Card.Title>Veterinary Services for Your Pet</Card.Title>
            <Card.Text>
            Your pet can enjoy comprehensive preventive and wellness care veterinary services for every stage of life, from puppy or kitten through adult and the senior years. We invite you to explore our services to learn more and help keep your pet happy and healthy!
            </Card.Text>
            <Button variant="primary">LEARN MORE</Button>
          </Card.Body>
        </Card>
        <br/>
        < VetCard />
      </div>
    );
  }
}
 
export default About;