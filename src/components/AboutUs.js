import React from "react";
import logo from "./images/logo.png";
import "./about-us.css";
const AboutUs = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo d-flex ">
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </div>
      <section className="userAgreement-section mt-5 mb-5">
        <div className="container">
          <div className="userAgreement-header text-center">
            <h3>About Us</h3>
          </div>
          <div className="privacy-wrapper">
        
            <ul>
              <li>
              <strong>Trans23</strong> is headquartered in Pune (Maharashtra), provides services in multiple verticals including storage, packers & movers, couriers, vehicle shipping, logistics & many more to come.
              </li>
              <br/>
              <li>
              <strong>Trans23</strong> app enables customers to book multiple services at one platform providing total transparency to customers about end-to-end process.
              </li>
            </ul>

         
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
