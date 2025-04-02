import React from "react";
import { Col, Row, Card, CardBody, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import pic from "../images/pic.jpg";
function Second() {
  return (
    <>
    
      <div className="bg">
      <section id="projects">
          <Row>
            <Col lg={12}>
              <center>
                <h2 className="pro">PROJECTS</h2>
              </center>SDG
            </Col>
          </Row>
          <div className="threecard">
            <Row>
              <Col lg={4}>
                <Card style={{ width: "18rem" }} className="card1">
                  <Card.Body>
                    <Card.Title className="title1">Project-1</Card.Title>
                    <Card.Text className="title2">
                      Will it be rougher and hinder some pursuit? Pleasures, but
                      from none of the actual duties and existence.
                    </Card.Text>
                    <Card.Text className="title3">
                      <p>Css &nbsp;&nbsp;Javascript&nbsp;&nbsp;React</p>
                      <br />
                      <FaGithub className="logosec" />
                      <BsBoxArrowUpRight className="logosec1" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "18rem" }} className="card2">
                  <Card.Body>
                    <Card.Title className="title1">Project-2</Card.Title>
                    <Card.Text className="title2">
                      Will it be rougher and hinder some pursuit? Pleasures, but
                      from none of the actual duties and existence.
                    </Card.Text>
                    <Card.Text className="title3">
                      <p>Css &nbsp;&nbsp;Javascript&nbsp;&nbsp;React</p>
                      <br />
                      <FaGithub className="logosec" />
                      <BsBoxArrowUpRight className="logosec1" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={{ width: "18rem" }} className="card3">
                  <Card.Body>
                    <Card.Title className="title1">Project-3</Card.Title>
                    <Card.Text className="title2">
                      Will it be rougher and hinder some pursuit? Pleasures, but
                      from none of the actual duties and existence.
                    </Card.Text>
                    <Card.Text className="title3">
                      <p>Css &nbsp;&nbsp;Javascript&nbsp;&nbsp;React</p>
                      <br />
                      <FaGithub className="logosec" />
                      <BsBoxArrowUpRight className="logosec1" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          </section>
      </div>
     
    </>
  );
}

export default Second;
