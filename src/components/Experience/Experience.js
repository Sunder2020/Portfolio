import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Card";
import Particle1 from "./Particle1";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle1 />
      <Container>
        <h1 className="project-heading">
          Experience <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          My work experience as a Software Developer Engineer and working on
          different companies and projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Software Developer"
              title1="Syntiaro"
              title2="May 2023 - Present"
              description=" Contributing to different open-source projects and learn from industry experts"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="UI Engineer Intern"
              title1="Syntiaro"
              title2="Jan 2023 - May 2023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
