import React from "react";
import "../css/header.css";
import image0 from "../assets/profile-images/IMG_1814.JPG";
import verified from "../assets/position-images/verified.png";
import logo from "../assets/position-images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header-section" name="home">
      <div className="text-section">
        <p>Hi there!👋 My name is</p>
        <h2>
          Ayan Chakraborty
          <img
            className="verified-image"
            src={verified}
            alt="verified"
            style={{ width: "40px" }}
          />
        </h2>
        <p className="description">
          B.Tech 3rd Year Student in Kalinga Instritute of Industrial
          Technology. Passionate about developing things with my utmost
          creativity and challenging myself to solve different problems with
          coding.Travelling throughout the year to pursue the farthest expanses of Earth. ✌
        </p>
        <div className="wrapper">
          <p>I'm a</p>
          <div className="words">
            <span>Web Developer.</span>
            <span>Competitive Coder.</span>
            <span>Web Developer.</span>
            <span>Competitive Coder.</span>
            <span>Web Developer.</span>
          </div>
        </div>
        {/* <button className="resume-button">Resume</button> */}
        <div className="header-footer">
          <div className="resume-button-div">
            <Button variant="primary" className="resume-button" href="https://drive.google.com/file/d/1cpPKxxHwd_Mq3uPparE7wu6uDzWXRVSL/view?usp=sharing">
              Resume <CloudDownloadIcon />
            </Button>
          </div>
          {/* <div>
            <span className="member-text">- Technical Member at</span>
            <img src={logo} style={{ width: "100px" }} />
          </div> */}
        </div>
      </div>
      <div className="image-section">
        <img src={image0} alt="main-profile" />
      </div>
    </div>
  );
}
export default Header;
