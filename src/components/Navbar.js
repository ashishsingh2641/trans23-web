import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";
import { Modal } from "antd";
import { useNavigate } from 'react-router-dom';

import "./Navbar.css";
import "./Register.css";
import { useFormData } from "../Context/FormDataContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [modal2Open, setModal2Open] = useState(false);

  const closeMenu = () => setClick(false);
  const navigate = useNavigate();

  const subscriptionNavigate = () =>{
    navigate('/subscription');
    
  }

  const { formData, setFormData } = useFormData();


  // form data 

   // create a state variable to store the input data
  //  const [formData, setFormData] = React.useState({});

   // handle the change of each input element
   const handleChange = (e) => {
     // get the name and value of the input element
     const { name, value } = e.target;
     // update the state variable with the input value
     setFormData({ ...formData, [name]: value });
   };
 
   // handle the click of the register button
   const handleClickSubmit = () => {
     // print the input data in the console
     console.log(formData);

     navigate('/subscription');
   };

  return (
    <div className="header">

      <nav className="navbar">
  
        <Link to="/" className="logo">
          <img style={{marginLeft:"20px"}} src={logo} alt="logo" />
        </Link>
        <div className="hamburger " onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <div class="franchies-btn" onClick={() => setModal2Open(true)}>
              <span> Franchises Register</span>
              {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg> */}
            </div>
            <Modal
              title=""
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
              style={{ marginTop: "8rem" }}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
            >
              <div class="form_wrapper">
                <div class="form_container">
                  <div class="title_container">
                    <h2>Franchises Registration</h2>
                  </div>
                  <div class="row clearfix">
                    <div class="">
                      <form>
                        <div class="">
                          <div class="input_field">
                            <span>
                              <i aria-hidden="true" class="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div class="input_field">
                          <span>
                            <i aria-hidden="true" class="fa fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div class="input_field">
                          <span>
                            <i aria-hidden="true" class="fa fa-phone"></i>
                          </span>
                          <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            placeholder="Enter Your Phone No"
                          />
                        </div>
                        <div class="input_field">
                          <span>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            placeholder="Enter Your Address"
                          />
                        </div>
                        <div class="input_field">
                          <span>
                            <i
                              class="fa fa-location-arrow"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <input
                            type="text"
                            name="state"
                            onChange={handleChange}
                            placeholder="Enter Your State"
                          />
                        </div>
                        <div class="input_field">
                          <span>
                            <i class="fa fa-building" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            name="city"
                            onChange={handleChange}
                            placeholder="Enter Your City"
                          />
                        </div>
                        <div class="input_field">
                          <span>
                            <i aria-hidden="true" class="fa fa-lock"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center">
                          <button 
                          // onClick={subscriptionNavigate}
                          onClick={handleClickSubmit}
                           type="button" class=" btn-primary">
                            REGISTER
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
