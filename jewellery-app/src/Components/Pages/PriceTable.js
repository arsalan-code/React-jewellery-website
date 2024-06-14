import React from 'react'
import Newsletter from '../Newsletter/Newsletter'
import '../Pages/Stylesheet/pricetable.css'
import { Link } from 'react-router-dom'

function PriceTable() {
  return (
   <>
   
  
   <div className="blog-container">
                <ul className='blog-list'>
                    <li className='navItems'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navItems'>
                        <Link to="/price"> Price Table</Link>
                    </li>
                </ul>
            </div>
       
      <div className="wrapper">
  <div className="pricing-table gprice-single">
    <div className="head">
      <h4 className="title">Starter</h4> 
    </div>
    <div className="content">
      <div className="price">
        <h1>$19</h1>
      </div>
      <ul>
        <li>Gravida Est Quis Euismod</li>
        <li>Maximus Quam Posuere</li>
        <li>Maximus Quam Posuere</li>
        <li>Curabitur Cursus Dignis</li>
        <li> <del>Donec Aliquam Ante None</del> </li>
        <li> <del>Donec Condimentum Fer</del></li>
      </ul>
      <div className="sign-up">
        <a href="#" className="btn bordered radius">BUY THE PACKAGE</a>
      </div>
    </div>
  </div>
  <div className="pricing-table gprice-single">
    <div className="head">
      <h4 className="title">Regular</h4>
    </div>
    <div className="content">
      <div className="price">
        <h1>$59</h1>
      </div>
      <ul>
        <li>Gravida Est Quis Euismod</li>
        <li>Maximus Quam Posuere</li>
        <li>Maximus Quam Posuere</li>
        <li>Curabitur Cursus Dignis</li>
        <li>Donec Aliquam Ante Non</li>
        <li><del>Donec Condimentum Fer</del></li>
      </ul>
      <div className="sign-up">
        <a href="#" className="btn bordered radius">BUY THE PACKAGE</a>
      </div>
    </div>
  </div>
  <div className="pricing-table gprice-single">
    <div className="head">
      <h4 className="title">Premium</h4>
    </div>
    <div className="content">
      <div className="price">
        <h1>$99</h1>
      </div>
      <ul>
      <li>Gravida Est Quis Euismod</li>
        <li>Maximus Quam Posuere</li>
        <li>Maximus Quam Posuere</li>
        <li>Curabitur Cursus Dignis</li>
        <li>Donec Aliquam Ante Non</li>
        <li><del>Donec Condimentum Fer</del></li>
      </ul>
      <div className="sign-up">
        <a href="#" className="btn bordered radius">BUY THE PACKAGE</a>
      </div>
    </div>
  </div>
</div>




   <Newsletter/>
   
   </>
  )
}

export default PriceTable   