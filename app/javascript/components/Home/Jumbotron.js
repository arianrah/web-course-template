import React, { Component } from "react";
import styled from "styled-components";
import { EDEADLK } from "constants";

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 100px 0;
  color: #fff;
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`;

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  width: 100%;
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`;

const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <H1>Web Course Template</H1>
              <Subhead>Linear module based course template for videos.</Subhead>
              <div className="cta-wrapper">
                <Button className="btn fancy-btn">Get Started</Button>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4 text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jNQXAC9IVRw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Jumbotron;
