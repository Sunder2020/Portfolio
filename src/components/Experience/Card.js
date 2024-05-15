import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ width: "400px" }}>
      <Card.Body>
        <Card.Title style={{textAlign:"left"}}>{props.title}</Card.Title>
        <Card.Title style={{ color: "#888",textAlign:"left" }}>{props.title1}</Card.Title>
        <Card.Title style={{ color: "#888",textAlign:"left" }}>{props.title2}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
