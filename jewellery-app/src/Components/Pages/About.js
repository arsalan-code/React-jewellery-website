import React from 'react'
 import '../Pages/about.css'
import Navbar from '../HomeComponents/Navbar/Navbar'
import { Link } from 'react-router-dom'
import blog2 from '../assets/images/img_blog2.png'
import Newsleetr from '../Newsletter/Newsletter'

function About() {
  return (
    <>
    <Navbar/>
    <div className="blog-container">
        <ul className='blog-list'>
          <li className='navItems'>
            <Link to="/">Home</Link>
          </li>
          <li className='navItems'>
            <Link to="/blog">About us</Link>
          </li>
        </ul>
      </div>

      <div className="container">
            <h2 style={{marginLeft:'53px', padding:'10px 0', fontSize:'18px', letterSpacing:'1px'}}>About Us</h2>
        <div className="row">
            <div className="col-12 about-img">
                <img src={blog2}   className='img-fluid' alt="" />
            </div>
            <div className="col-12 mt-4 about-content">
                    <p  >
                    The About Us page of your shop is vital because it’s where users go when first trying to determine a level of trust. Since trust is such an important part of selling online, it’s a good idea to give people a fair amount information about yourself and your shop. Here are a few things you should touch on:
                    </p>

                  
                        <ul className='navlist mt-5'>
                            <li> <i class="fa-solid fa-check"></i> Who you are</li>
                            <li> <i class="fa-solid fa-check"></i>Why you sell the items you sell</li>
                            <li><i class="fa-solid fa-check"></i>Where you are located</li>
                            <li><i class="fa-solid fa-check"></i>How long you have been in business</li>
                            <li><i class="fa-solid fa-check"></i>How long you have been running your online shop</li>
                            <li><i class="fa-solid fa-check"></i>Who are the people on your team</li>
                            <li><i class="fa-solid fa-check"></i>Contact information</li>
                            <li><i class="fa-solid fa-check"></i>Social links (Twitter, Facebook)</li>
                        </ul>
                     
            </div>
        </div>
      </div>

      <Newsleetr/>
    
    
    </>
  )
}

export default About    