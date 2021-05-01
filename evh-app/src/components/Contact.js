import React, { Component } from "react";
import { useForm, ValidationError } from '@formspree/react';
const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
    } 
class Contact extends Component {
  render() {
    
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p> Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum <a href="https://github.com/sunshinejen/evh/projects/1"> Project </a>.
        </p>
        <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
    );
  }
}
 
export default Contact;