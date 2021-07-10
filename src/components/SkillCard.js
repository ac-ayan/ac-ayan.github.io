import React from "react";
import {Card} from "react-bootstrap";
function SkillCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="skill-card">
      <div className="image-section">
      <Card.Img variant="top" src={props.image} className="card-image" />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-content">
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default SkillCard;
