import React from "react";
// import "./userAgreement.css";
import logo from "../images/logo.png";

const RefundPloicy = () => {
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
            <h3>REFUND POLICY</h3>
          </div>
        
          <div className="privacy-wrapper" >
            <ul>
              <li style={{marginBottom:"9px"}}> All on-line payments made towards packing and transportation shall be taken into consideration only when the relevant amount is received and credited in the company's bank account. </li>
            
              <li style={{marginBottom:"9px"}}> In case of cancellation of the booking, after making on-line payment, refund of the amount shall be paid within 30 working days after the said amount is received and credited in company's bank account.</li>
          
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPloicy;
