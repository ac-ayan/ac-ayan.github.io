import React,{useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);
  return (
    <Card style={{ width: "20rem" }} className="project-card" data-aos="zoom-in">
      <div className="skill-image">
      <Card.Img variant="top" src={props.image} className="skill-img"
      />
      </div>
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <div className="button-div">
        <Button variant="primary">GitHub</Button>
        <Button variant="primary">Website</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
