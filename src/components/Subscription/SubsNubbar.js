import React from 'react'
import logo from "../images/logo.png";
const SubsNubbar = () => {
  return (
    <div className="header">

      <nav style={{display:"flex", justifyContent:'center'}} className="navbar">
  
        <a href="/" className="logo">
          <img  src={logo} alt="logo" />
        </a>
   
      </nav>
    </div>
  )
}

export default SubsNubbar