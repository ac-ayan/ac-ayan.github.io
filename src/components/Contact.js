import React from "react";
import {Form, Button} from "react-bootstrap";
import "../css/contact.css";
import Success from "./Success";
function Contact() {
  return (
    <div className="contact-section">
      <div class="display-section lottie">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_1plcwvk5.json"
          background="transparent"
          speed="1"
        //   style={{ width: "400px", height: "400px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="form-section">
        <h2>Get in touch !</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Success />
        </Form>
      </div>
    </div>
  );
}
export default Contact;
