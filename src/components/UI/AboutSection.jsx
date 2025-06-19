import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to e veichele service</h2>
              <p className="section__description">
              Welcome to FRIENDS MOTORS, your go-to destination for sustainable and reliable electric vehicles. We specialize in cutting-edge e-rickshaws, designed to reduce environmental impact and promote a greener, cleaner future. Our mission is to transform urban transportation by offering top-quality, affordable e-vehicles that deliver performance, safety, and comfort. Each vehicle in our showroom is crafted with advanced technology to meet the needs of both private and commercial users. Whether you're upgrading a fleet or seeking a personal ride, FRIENDS MOTORS is here to make eco-friendly commuting accessible and efficient. Join us on the road to sustainability!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> good health good environment 
                  .
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> easy to purchase.
                  
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> at affordable  price .
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> luxery without the pollution
                  .
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
