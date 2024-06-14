import React from 'react'
import banner from './../assets/images/home_banner_image_text.png'
import './Banner.css'


function Banner() {
  return (

    <>
    
    <div className="banner-wrapper mt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                        <div className="inner-banner">
                            <img src={banner} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nesciunt quae. Praesentium esse, cupiditate officia ea ad aspernatur blanditiis impedit sequi beata .</p>
                            <button>Shop Now</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    
  )
}

export default Banner