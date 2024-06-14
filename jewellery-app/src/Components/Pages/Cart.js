import React from 'react'
import { Link } from 'react-router-dom'
import item from '../assets/images/4_compact.jpg'
import './Stylesheet/cart.css'
import item1 from '../assets/images/1_small.jpg'
 import  Newletter from '../Newsletter/Newsletter'

function Cart() {
  return (
    <>

      <div className="blog-container">
        <ul className='blog-list'>
          <li className='navItems'>
            <Link to="/">Home</Link>
          </li>
          <li className='navItems'>
            <Link to="/cart">Your Shopping Cart</Link>
          </li>
        </ul>
      </div>
{/* 
      <section className="shopping-cart">
        <div className="container">
          <h2>SHOPPING CART</h2>
          <div className="row text-center cart-bg" >
          <div className="col-md-3">
            <h3>Items</h3>
          </div>
          <div className="col-md-3">
            <h3>Price</h3>
          </div>
          <div className="col-md-3">
            <h3>QTy</h3>
          </div>
          <div className="col-md-3">
            <h3>Subtoal</h3>
          </div>
          </div>
            
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-4">
                  <img src={item} className='img-fluid' alt="" />
                </div>
                <div className="col-md-7"> 
                  <h2>Donec condime fermentum</h2>
                   <span className='d-block'>black / small</span>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <h4>$200.00</h4>
            </div>

            <div className="col-md-3" style={{textAlign:"center"}}>
               <div className="box">
                1
               </div>
            </div>

            <div className="col-md-3" style={{textAlign:"center"}}>
            <h4>$200.00</h4>
            </div>

          </div>

           <hr />

           <div className="row mt-4">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-4">
                  <img src={item1} className='img-fluid' alt="" />
                </div>
                <div className="col-md-7">
                  <h2>Donec condime fermentum</h2>
                   <span className='d-block'>black / small</span>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <h4>$200.00</h4>
            </div>

            <div className="col-md-3" style={{textAlign:"center"}}>
               <div className="box">
                1
               </div>
            </div>

            <div className="col-md-3" style={{textAlign:"center"}}>
            <h4>$200.00</h4>
            </div>

          </div>
 
        </div>
      </section> */}
      
        <section className="shopping-cart">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-5">
                <div className="listing">
                <h3>Item</h3>
                <div className="img-content">
                  <div className="child-content" style={{display:"flex", justifyContent:"space-evenly"}}>
                  <img src={item} className='img-fluid' alt="" />
                  <h3>donec codlime fmentumer <br/> black / small</h3>
                  </div>
                
                </div>
                </div>
                
              </div>

              <div className="col-md-3">
                <div className="listing">
                <h3>Price</h3>
                <span>$200.</span>
                </div>
              </div>

              <div className="col-md-2">
                <div className="listing">
                <h3>QTY</h3>
                <div className="box" >
                <span>1</span>
                </div>

                </div>
              </div>

              <div className="col-md-2">
                <div className="listing">
                <h3>Subtotal</h3>
                <span>$200.</span>
                </div>
              </div>
            </div>

              <div className="row text-center mt-5">
              <div className="col-md-5">
                <div className="listing">
                <div className="img-content">
                  <div className="child-content" style={{display:"flex", justifyContent:"space-evenly"}}>
                  <img src={item1} className='img-fluid' alt="" />
                  <h3>donec codlime fmentumer</h3>
                  </div>
                </div>
                </div>
                
              </div>

              <div className="col-md-3">
                <div className="listing">
                <span>$200.</span>
                </div>
              </div>

              <div className="col-md-2">
                <div className="listing">
                <span>1</span>

                </div>
              </div>

              <div className="col-md-2">
                <div className="listing">
                <span>$200.</span>
                </div>
              </div>

              <div className="proceed-now d-flex justify-content-end mt-2">
                <h4>Proceed to check out</h4>
              </div>

              </div>

          </div>
        </section>

     <Newletter/>

    </>
  )
}

export default Cart