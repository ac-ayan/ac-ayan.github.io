import React from "react";
import Lottie from "react-lottie-player";
import "../css/about.css";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import chipdata from "../data/db/chipdata";
import plantJson from "../assets/lottie-animations/67043-animated-green-leaf-plant-in-a-greek-terracotta-pot.json";
import image1 from "../assets/profile-images/IMG_1804.JPG";
function About() {
  return (
    <div className="about-section" name="about">
      <div className="image-section">
        <Lottie 
        loop 
        animationData={plantJson} 
        play 
        // style={{ width: 500, height: 500 }}
        style={{width:"60%"}}
        />
      </div>
      <div className="text-section">
        <h2>About Me</h2>
        <p>
          I learnt about HTML, CSS, JS and the other related technologies about
          a year and a half and its so interesting and engaging that I
          absolutely love to develop different designed pages and apply
          functionalities on them and deploy them to take reviews from the
          viewers. I'm also a flutter app developer and developed small mini
          projects to brush up my skills.Besides that I'm also a competitive
          coder who loves to code and solve different sorts of problem related
          to data structure and algorithms. I'm actively participating and
          practicing in different platforms viz. Hackerrank, Codechef,
          Codeforces, Google Kickstart, Google Codejam, Leetcode etc.
        </p>
        <div className="chip-class">
          {chipdata.map((item) => {
            return (
              <Chip
                color={item.variant.toLowerCase()}
                label={item.label}
                avatar={<Avatar>{item.letter}</Avatar>}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default About;
