import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Vaibhav Mhaske.</span>
            <span className="purple"> </span>
            <br />
            I have an MBA in Finance and a passion for understanding the stock
            market. As an equity research analyst and financial analyst
            enthusiast, I bring a lot of knowledge and a unique view to every
            project. My deep interest in the stock market and skills in company
            valuations help me create detailed and accurate financial models and
            reports just for you.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "An investment in knowledge pays the best interest."{" "}
          </p>
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
