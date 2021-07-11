import React from "react";
import "../css/header.css";
import image0 from "../assets/profile-images/IMG_1814.JPG";
import logo from "../assets/position-images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header-section">
      <div className="text-section">
        <p>Hi there!👋 My name is</p>
        <h2>Ayan Chakraborty</h2>
        <p className="description">
          I learnt about HTML, CSS, JS and the other related technologies about
          a year and a half and its so interesting and engaging that I
          absolutely love to develop different designed pages and apply
          functionalities on them and deploy them to take reviews from the
          viewers. I'm also a flutter app developer and developed few small mini
          projects to brush my skills up and now developing an app which I'll be
          launching soon. Besides that I'm also a competitive coder who loves to
          code and solve different sorts of problem related to data structure
          and algorithms. I'm actively participating and practicing in different
          platforms viz. Hackerrank, Codechef, Codeforces, Google Kickstart,
          Google Codejam, Leetcode etc.
        </p>
       {/* <button className="resume-button">Resume</button> */}
       <Button variant="primary" className="resume-button">Resume <CloudDownloadIcon /></Button>
       <span className="member-text">- Technical Member at</span><img src={logo} style={{"width":"100px"}}/>
      </div>
      <div className="image-section">
        <img src={image0} alt="main-profile" />
      </div>
    </div>
  );
}
export default Header;
