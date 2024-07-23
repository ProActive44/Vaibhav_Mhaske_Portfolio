import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/VaibhavPhoto.jpg";
import Tilt from "react-parallax-tilt";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {"I'm Vaibhav Mhaske. "}
              A stock market trader and investor with over six years of
              experience.
              <br />
              <br />I hold NISM certifications in
              <i>
                <b className="purple">
                  {" "}
                  Equity Derivatives and Research Analysis.{" "}
                </b>
              </i>
              <br />
              <br />
              {
                "I specialize in creating detailed financial models and equity research reports on publicly listed companies. Passionate about uncovering market opportunities, I deliver actionable insights to investors and traders. For expert financial analysis and tailored investment strategies, "
              }
              <br />
              <br />
              {"let's work together to achieve your "}
              <i>
                <b className="purple">
                 financial goals. 
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@technicaltradervaibhav5582"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/technical_trader_vaibhav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vaibhav-mhaske-39229a184/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
