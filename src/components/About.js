import React from "react";
import "../css/about.css";
import image1 from "../assets/profile-images/IMG_1804.JPG";
function About() {
  return (
    <div className="about-section">
      <div className="image-section">
        <img src={image1} alt="about" />
      </div>
      <div className="text-section">
        <h2>About Me</h2>
        <p>
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
      </div>
    </div>
  );
}
export default About;
