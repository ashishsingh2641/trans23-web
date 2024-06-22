import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <section class="intro_section page_mainslider ls ms h-50">
        <div class="flexslider" data-nav="false">
          <ul class="slides">
            <li>
              <img
                id="mainImage"
                src="https://i.ibb.co/C1NWbpd/Banner-1-With-Text.png"
                alt=""
              />
              {/* <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="slide_description_wrapper">
                      <div class="slide_description">
                        <div class="intro-layer" data-animation="fadeInUp">
                          <h3 style={{ color: "#000" }}>
                            Over
                            <span class="highlight">600</span> Reviews
                          </h3>
                          <h2 style={{ color: "#000" }}>Five Stars</h2>
                        </div>
                        <div class="intro-layer" data-animation="fadeInUp">
                          <p class="grey" style={{ color: "#000" }}>
                            <span class="bold">Trans23 Company</span> is a local
                            moving company with experts and professionals, who
                            cater to customer needs with safety, care and love.
                            Call us now:
                            <span class="bold">01 123 456 789</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>

            <li className="" style={{ color: "#000" }}>
              <img id="mainImage" src="https://i.ibb.co/ryKG33v/Trans23-Banner-2204-03.png" alt="" />
              {/* <div class="container">
                <div class="row">
                  <div class="col-sm-12 text-right">
                    <div class="slide_description_wrapper">
                      <div class="slide_description text-left">
                        <div class="intro-layer" data-animation="fadeInUp">
                          <h3 style={{ color: "#000" }}>Find out why we're</h3>
                          <h2 style={{ color: "#000" }}>
                            <span class="highlight">#1</span> Moving
                          </h2>
                        </div>
                        <div class="intro-layer" data-animation="fadeInUp">
                          <p class="grey" style={{ color: "#000" }}>
                            <span class="bold">Trans23 Company</span> is a local
                            moving company with experts and professionals, who
                            cater to customer needs with safety, care and love.
                            Call us now:
                            <span class="bold">01 123 456 789</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
