import React from 'react'
import './Latest.css'
import Line from './../../assets/images/home_line.png'
import newImg from './../../assets/images/home_bottom_banner.jpg'
import icon from './../../assets/images/4_large.png'

function Latest() {
  return (
    <>
      <div className="container popular-heading">
        <div className="row text-center">
          <div className="col-12">
            <div className="home-line">
              <h3>LATEST NEWS</h3>
              <img src={Line} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Latest mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={newImg} className='img-fluid' alt="" />
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-md-3">

                <div class="date_inner">
                    <p>
                      <small>July</small><span>08</span>
                    </p>
                  </div>


                </div>
                <div className="col-md-9">
                  <h4>Sample Blogs Post With Left Slidebar</h4>
                  <div className="icons-icons ">
                    <i class="fa fa-user"></i>
                    <span>Jin Alkaid</span>
                  </div>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure rerum aliquam culpa libero. Esse, officia..</p>
                </div>
                <hr />
              </div>

              <div className="row">
                <div className="col-md-3">
                  {/* <img src={icon} className='img-fluid' alt="" /> */}
                  <div class="date_inner">
                    <p>
                      <small>July</small><span>08</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4>Sample Blogs Post With Left Slidebar</h4>
                  <div className="icons-icons ">
                    <i class="fa fa-user"></i>
                    <span>Jin Alkaid</span>
                  </div>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure rerum aliquam culpa libero. Esse, officia..</p>
                </div>
                <hr />
              </div>

              <div className="row">
                <div className="col-md-3">
                <div class="date_inner">
                    <p>
                      <small>July</small><span>08</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4>Sample Blogs Post With Left Slidebar</h4>
                  <div className="icons-icons ">
                    <i class="fa fa-user"></i>
                    <span>Jin Alkaid</span>
                  </div>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure rerum aliquam culpa libero. Esse, officia..</p>
                </div>
                <hr />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Latest