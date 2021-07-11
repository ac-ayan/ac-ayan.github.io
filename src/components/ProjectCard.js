import React from "react";
import { Card, Button } from "react-bootstrap";
function ProjectCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
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
