import React from "react";
import { Card, Button } from "react-bootstrap";
function ProjectCard(props) {
  return (
    <Card style={{ width: "20rem" }} className="project-card">
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
