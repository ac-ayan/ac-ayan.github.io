import React,{useEffect} from "react";
import "../css/experience.css";
import { Card } from "react-bootstrap";
import team from "../assets/experience-image/4.jpg";
import expdata from "../data/db/expdata";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
    useEffect(() => {
        Aos.init({ duration: 1500});
      }, []);
  return (
    <div className="experience-section">
    <h2>Experience</h2>
    <div className="exp-list">
      <div className="text">
        {/* <h2>Experience</h2> */}
        <div className="exp-cards">
        {expdata.map((item, idx) => {
          return (
            <Card
              bg={item.variant.toLowerCase()}
              key={idx}
              text={item.variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "22rem" }}
              className="mb-2 color-card"
              data-aos="zoom-out"
            >
              <Card.Header>{item.header}</Card.Header>
              <Card.Body>
                <Card.Title className="exp-card-title">{item.title}</Card.Title>
                <Card.Text className="exp-card-text">
                <ul>
                  {item.text.map((listitem)=>{
                      return (
                            <li>{listitem}</li>
                      );
                  })}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
        </div>
      </div>
      <div className="team-lottie">
        <img src={team} alt="team" />
      </div>
      </div>
    </div>
  );
}
export default Experience;
