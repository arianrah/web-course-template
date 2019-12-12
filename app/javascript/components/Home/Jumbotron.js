import React, { Component } from "react";

const Jumbotron = () => {
  return (
    <section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h1>Web Course Template</h1>
              <p>Linear module based course template for videos.</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4 text-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
