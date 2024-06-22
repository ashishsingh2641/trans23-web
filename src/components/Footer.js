import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Link as RouterLink } from "react-router-dom";

import "./Footer.css";
import { Col, Row, Button, Modal, Card } from "antd";
import { BsChevronRight } from "react-icons/bs";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);
  return (
    <div className="footer" id="footer">
      <div className="container">
        <Row>
          <Col xs={{ span: "24" }} lg={{ span: "8" }}>
            <div class="widget">
              <h3 style={{ marginTop: "10px" }}>Address </h3>
              <div>
                <div class="media small-teaser">
                  <div class="media-left media-middle">
                    <i
                      style={{ fontSize: "17px", marginLeft: "2px" }}
                      class="fa fa-map-marker highlight"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div style={{textAlign:"left"}} class="media-body media-middle">
                    {/* Mumbai Maharashtra India */}
                    447, Ramnagar, Lonikand, Pune Nagar Road, Wagholi, Pune, Maharashtra, India- 412207
                  </div>
                </div>

                <div class="media small-teaser">
                  <div class="media-left media-middle">
                    <i
                      style={{ fontSize: "22px" }}
                      class="fa fa-mobile highlight"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="media-body media-middle">
                    Call 24/7: +91 853 0312323
                  </div>
                </div>

                <div class="media small-teaser">
                  <div class="media-left media-middle">
                    <i
                      style={{ fontSize: "13px", marginLeft: " 5px" }}
                      class="fa fa-envelope-o highlight"
                      aria-hidden="true"
                    ></i>
                  </div>

                  <div class="media-body media-middle darklinks">
                  punetrans23@gmail.com
                  </div>
                </div>
              </div>

              <div class="darklinks topmargin_30">
                <a
                  style={{ borderRadius: "100px" }}
                  href="#"
                  class="social-icon border-icon rounded-icon fa fa-facebook"
                ></a>
                <a
                  style={{ borderRadius: "100px" }}
                  href="#"
                  class="social-icon border-icon rounded-icon  fa fa-twitter"
                ></a>
                <a
                  style={{ borderRadius: "100px" }}
                  href="#"
                  class="social-icon border-icon rounded-icon fa fa-instagram"
                ></a>
              </div>
            </div>
          </Col>
          <Col xs={{ span: "24" }} lg={{ span: "8" }}>
            <div class="widget widget_contact topmargin_10">
              <h3>Contact Us</h3>
              <form class="contact-form" method="post" action="./">
                <p style={{borderColor:"gray !important", outlineColor:"gray !important"}} class="form-group">
                  <label for="footer-name">
                    Name <span class="required">*</span>
                  </label>
                  <i class="fa fa-user highlight" aria-hidden="true"></i>
                  <input
                    type="text"
                    aria-required="true"
                    size="30"
                    value=""
                    name="name"
                    id="footer-name"
                    class="form-control"
                    placeholder="Full Name"
                  />
                </p>
                <p class="form-group">
                  <label for="footer-email">
                    Email <span class="required">*</span>
                  </label>
                  <i class="fa fa-envelope highlight" aria-hidden="true"></i>
                  <input
                    type="email"
                    aria-required="true"
                    size="30"
                    value=""
                    name="email"
                    id="footer-email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </p>
                <p class="form-group">
                  <label for="footer-message">Message</label>
                  <i class="fa fa-pencil highlight" aria-hidden="true"></i>
                  <textarea
                    aria-required="true"
                    rows="3"
                    cols="45"
                    name="message"
                    id="footer-message"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </p>
                <p class="footer_contact-form-submit topmargin_40">
                  <button
                    type="submit"
                    id="footer_contact_form_submit"
                    name="contact_submit"
                    class="theme_button color1"
                  >
                    Send Message
                  </button>
                </p>
              </form>
            </div>
          </Col>
          <Col xs={{ span: "24" }} lg={{ span: "8" }}>
            <div class="widget widget_recent_posts topmargin_10">
              <h3 class="widget-title">Quick Links</h3>
              <div className="footer-links">
                <ScrollLink
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="footer-links"
                >
                  <BsChevronRight /> &nbsp; Home
                </ScrollLink>
              </div>

              <div className="footer-links">
                <ScrollLink
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="footer-links"
                >
                  <BsChevronRight /> &nbsp; Services
                </ScrollLink>
              </div>
              <div className="footer-links">
                <ScrollLink
                  activeClass="active"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="footer-links"
                >
                  <BsChevronRight /> &nbsp; Testimonials
                </ScrollLink>
              </div>
              {/* <div className="footer-links">
                <ScrollLink
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="footer-links"
                >
                  <BsChevronRight /> &nbsp; Faq
                </ScrollLink>
              </div> */}
              <div className="footer-links">
                <RouterLink to="/about-us" className="footer-links">
                  <BsChevronRight /> &nbsp; About Us
                </RouterLink>
              </div>
              <div className="footer-links">
                <RouterLink to="/contact" className="footer-links">
                  <BsChevronRight /> &nbsp; Contact
                </RouterLink>
              </div>
              <div className="footer-links">
                <RouterLink to="/terms-and-condition" className="footer-links">
                  <BsChevronRight />
                   {/* &nbsp; Privacy Policy */}
                   &nbsp; Terms & Condition
                </RouterLink>
              </div>
              <div className="footer-links">
                <RouterLink to="/privacy-policy" className="footer-links">
                  <BsChevronRight />
                   {/* &nbsp; Privacy Policy */}
                   &nbsp; Privacy Policy
                </RouterLink>
              </div>
              <div className="footer-links">
                <RouterLink to="/refund-policy" className="footer-links">
                  <BsChevronRight />
                   {/* &nbsp; Privacy Policy */}
                   &nbsp; Refund Policy
                </RouterLink>
              </div>

              <div className="footer-links">
                <RouterLink to="/vendorAgreement" className="footer-links">
                  <BsChevronRight /> &nbsp; Vendor Agreement
                </RouterLink>
              </div>
            </div>
          </Col>
        </Row>

        <div className="bottom">
          <span className="line"></span>
          <p>© Copyright 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
