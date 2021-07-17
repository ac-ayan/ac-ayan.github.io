import React from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import $ from "jquery";
import "../css/contact.css";
import SuccessAlert from "./SuccessAlert";
import useSound from "use-sound";
import boopSfx from "../assets/sounds/alcatel_success.mp3";

import{ init } from 'emailjs-com';
init("user_Tbs9cpKBWiXeTxjqVbv0k");
function Contact() {
 var sum=0,neg=0;
  var [severity_input,changeSeverity]=React.useState("success");
  var [message_input,changeMessage]=React.useState("Mail Send Successfully!");
  ////API CALLING
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2f2acu",
        "template_9axa51m",
        e.target,
        "user_Tbs9cpKBWiXeTxjqVbv0k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // /API END
  }
  const [play] = useSound(boopSfx);
  function formcheck(event) {
    event.preventDefault();
    var fields = $(".ss-item-required")
      .find("select, textarea, input")
      .serializeArray();
      console.log(fields);
    $.each(fields, function (i, field) {
      // alert(field.name + " is required");
      if (!field.value) {neg++;}
      else {
        sum++
      }
    });
    if (sum-neg === 3) {
      changeSeverity("success");
      changeMessage("Message sent successfully!");
      play();
      sendEmail(event);
    } else {
      changeSeverity("error");
      changeMessage("OOps, Sending Failed!");
    }
    console.log(sum-neg);
    neg=0;
    sum=0;
    console.log(sum-neg);
    
  }

  return (
    <div className="contact-section" name="contact">
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
        <Form
          className="contact-form ss-item-required"
          name="submit-form"
          onSubmit={formcheck}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="user_email"
              // required="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="user_name"
              // required="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              placeholder="Your Message Here..."
              // required="true"
            />
          </Form.Group>
          <SuccessAlert severity={severity_input} message={message_input} />
        </Form>
      </div>
    </div>
  );
}
export default Contact;
