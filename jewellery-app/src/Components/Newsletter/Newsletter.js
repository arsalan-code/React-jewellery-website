import React from 'react'
import './Newsletter.css'
import line from '../assets/images/home_line.png'
 

function Newsletter() {
  return (
    <>
       <div className="container popular-heading">
                <div className="row text-center">
                    <div className="col-12">
                        <div className="home-line">
                            <h3>NEWSLETTER</h3>
                            <img src={line} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mt-5">
                        <p>We promise only send good things</p>
                        <div className="search-bar">
                            <input type="email" placeholder='Your Email' required />
                            <button type='submit' className='icon-send'>
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
 
    
    </>
  )
}

export default Newsletter