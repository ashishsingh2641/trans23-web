import React from "react";
import logo from "./images/logo.png";

const Contact = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo d-flex ">
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </div>

      <section className="vendor-section mt-5 mb-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div
                class="widget widget_contact topmargin_10 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h3>Contact Us</h3>
                <form class="contact-form" method="post" action="./">
                  <p class="form-group">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
