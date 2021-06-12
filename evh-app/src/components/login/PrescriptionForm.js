import React, { Component } from "react";
import axios from "axios";
class PrescriptionForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };   
  }
  //this posts to local and not the database yett...
  handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Sending" });  
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    let buttonText = this.state.status;
    return (
      <div class="container-fluid">
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div>
          <label htmlFor="name"> Pet Name:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            //onChange={this.handleChange.bind(this)}
            required
          />
            </div>
            <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            value={this.state.email}
            //onChange={this.handleChange.bind(this)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            //onChange={this.handleChange.bind(this)}
            required
          />
            </div>
            
            <div>
            <label htmlFor="medication">Medication:
          <select value={this.state.value}>
            <option value="med1">Medication 1</option>
            <option value="med2">Medication 2</option>
            <option value="med3">Medication 3</option>
            <option value="med4">Medication 4</option>
          </select>
            </label>
            </div>
        <div>
          <label htmlFor="message">Notes:</label>
          <textarea
            id="message"
            value={this.state.message}
            //onChange={this.handleChange.bind(this)}
            required
          />
        </div>
        <button type="submit">{buttonText}</button>
        </form>
        </div>
    );
  }
}
 
export default PrescriptionForm;