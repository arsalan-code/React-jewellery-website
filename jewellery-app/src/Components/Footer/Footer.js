import React from 'react'
import visa from '../assets/images/icon_payment.png'
import './Footer.css'

function Footer() {
    return (
        <>

            <div className="footer mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">

                            <ul>
                                <h2>About Us</h2>
                                <li>Store Location</li>
                                <li>Wholesalers</li>
                                <li>Map Site</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>

                        <div className="col-md-3 col-sm-6 col-6">

                            <ul>
                                <h2>INFORMATION</h2>
                                <li>Store Location</li>
                                <li>Wholesalers</li>
                                <li>Map Site</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>

                        <div className="col-md-3 col-sm-6 col-6">

                            <ul>
                                <h2>ACCOUNT</h2>
                                <li>Store Location</li>
                                <li>Wholesalers</li>
                                <li>Map Site</li>
                                <li>Contact Us</li>
                            </ul>

                        </div>

                        <div className="col-md-3 col-sm-6 col-6">

                            <ul>
                                <h2>CUSTOMER</h2>
                                <li>Store Location</li>
                                <li>Wholesalers</li>
                                <li>Map Site</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

                  <div className="inner-footer bg-dark text-white">
                    <div className="container-fluid ">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 ">
                                    <p> &copy; 2023 Jewellery-REACT Template. All Rights Reserved</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <img src={visa} alt="" className='img-fluid' />
                                 </div>
                            </div>
                            </div>
                        </div>           

        </>
    )
}

export default Footer