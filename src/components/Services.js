import React from "react";
import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Services.css";

const About = () => {
  return (
    <div className="services" id="services">
      <section
        id="services"
        class="ls section_padding_top_150 section_padding_bottom_130"
      >
        <div class="container">
          <div class="row">

            <div class="col-sm-12 text-center">
              <h4 class="thin margin_0 text-uppercase">Welcome to</h4>
              <h2 class="section_header">Our Services</h2>
              <span class="line"></span>
              <p class="fontsize_20 grey">
                With professional movers, we provide the following services at
                affordable rates, to suit your pocket and sooth your mind.
              </p>
            </div>

          </div>
          <div class="row topmargin_30 columns_margin_bottom_30">
            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-map-marker"></i> */}
                  <img
                    src="https://i.ibb.co/W6nY0SC/home.png"
                    alt="home relocation"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/home-service">Home Relocation</Link>
                </h4>
                <p>
                  We’ll happily transport your household from one location to
                  another.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-globe" aria-hidden="true"></i> */}
                  <img
                    src="https://i.ibb.co/cJpKdNr/office.png"
                    alt="office relocation"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/office-service">Office Relocation</Link>
                </h4>
                <p>
                  Trans23 will make your long distance moving experience
                  stress-free.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 clear-sm">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
                  <img
                    src="https://i.ibb.co/prRy7gk/household.png"
                    alt="household storage"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/residential-service">Household Storage</Link>
                </h4>
                <p>
                  We offer several different moving kits so you don’t have to
                  worry about the details.
                </p>
              </div>
            </div>
            <div  class="col-md-4 col-sm-6 clear-md">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-inbox" aria-hidden="true"></i> */}
                  {/* <FaWarehouse /> */}
                  <img
                    src="https://i.ibb.co/z8P53mT/factory.png"
                    alt="commercial storage"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/commercial-service">Commercial Storage</Link>
                </h4>
                <p>
                  Sometimes you just can’t take everything with you when you’re
                  moving.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 clear-sm">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-gift" aria-hidden="true"></i> */}
                  <img
                    src="https://i.ibb.co/9nc7gkS/courier.png"
                    alt="courier"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/courier-service">Courier</Link>
                </h4>
                <p>
                  We have all the packing supplies, including boxes, packing
                  tape and bubble wrap.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-cubes" aria-hidden="true"></i> */}
                  {/* <FaShippingFast /> */}
                  <img
                    src="https://i.ibb.co/whjj1cy/vehicle-transport.png"
                    alt="vehicle transport"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h4 class="text-uppercase weight-black">
                  <Link to="/vehicle-shipping-service">Vehicle Shipping</Link>
                </h4>
                <p>
                  We allow our customers to rent the moving truck, and we’ll
                  load and unload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
