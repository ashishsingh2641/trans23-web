import React from 'react'
import './Subscription.css'
const Subscription = () => {
    return (
        <div id='subscription'>
            {/* going to add subscription package */}
            <div className="wrapper">
                <div className="table basic">
                    {/* <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">1000</span>
                            </div>
                        </div>
                    </div> */}
                    <div>
                       $ 22000
                    </div>
                    {/* <div className="package-name"></div> */}
                    <div className='package-name-custom'>
                      Movers & Packers
                    </div>
                    <span  className='deveider-custom'></span>
                    <ul className="features">
                        <li>
                            <span className="list-name">Professional Team </span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Comprehensive Packing</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Safe Transportation</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Local and Long-Distance</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                    </ul>
                    <div className="subsbtn"><button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Purchase</button></div>
                </div>
                <div className="table premium">
                    <div className="ribbon"><span>Trending</span></div>
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">59</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="package-name"></div> */}
                    <div className='package-name-custom'>
                      Storage
                    </div>
                    <span style={{backgroundColor:'#d0b3ff'}} className='deveider-custom'></span>
                    <ul className="features">
                        <li>
                            <span className="list-name">Luxurious Solutions</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Customizable Spaces</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Secure and Private</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">VIP Access</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                    </ul>
                    <div className="subsbtn"><button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Purchase</button></div>
                </div>
                <div className="table ultimate">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">99</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="package-name"></div> */}
                    <div className='package-name-custom'>
                     Courier
                    </div>
                    <span style={{backgroundColor:'#baf8d4'}} className='deveider-custom'></span>
                    <ul className="features">
                        <li>
                            <span className="list-name">Express Delivery</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Nationwide Coverage</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Secure Handling</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Nationwide Coverage</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                    </ul>
                    <div className="subsbtn"><button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Purchase</button></div>
                </div>
                <div className="table basic">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">29</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="package-name"></div> */}
                    <div className='package-name-custom'>
                      Vehicle Transport
                    </div>
                    <span className='deveider-custom'></span>
                    <ul className="features">
                        <li>
                            <span className="list-name">Safe and Secure Transport</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Door-to-Door Service</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Open Transport Solutions</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                        <li>
                            <span className="list-name">Experienced Drivers</span>
                            <span className="icon check"><i className="fa fa-check"></i></span>
                        </li>
                    </ul>
                    <div className="subsbtn"><button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Purchase</button></div>
                </div>
            
            </div>
            {/* going to add subscription package */}
        </div>
    )
}

export default Subscription