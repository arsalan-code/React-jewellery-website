import React from 'react';
import './Slider.css';
 import img1 from '../../assets/images/slide-image-3.jpg'
 import img2 from '../../assets/images/slide-image-2.jpg'
 import img3 from '../../assets/images/slide-image-1.jpg'
 import img4 from '../../assets/images/slide-image-caption-1.png'
 import img5 from '../../assets/images/slide-image-caption-2.png'
 import img6 from '../../assets/images/slide-image-caption-3.png'
 



function Slider() {
  return (
    <>

    <div classname="slider-section">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
   
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img src={img3} className="d-block w-100 img-fluid" alt="..." />
        <div className="carousel-caption  d-md-block">
          <h5>Live the moment</h5>
          <img src={img4} className='img-fluid' alt="..." />
          <p> Lorem ipsum is placeholder text commonly used in the graphic commonly used in the graphic, </p>
          <button className='btn btn-dark mt-3 btn-4 '>See Collection</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src= {img2} className="d-block w-100 img-fluid" alt="..." />
        <div className="carousel-caption  d-md-block">
          <div className="banner-img">
          <img src={img5} className='img-fluid' alt="" /> 
            <span className='span-text mt-2'>Love's embrace</span>      
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src= {img1} className="d-block w-100 img-fluid" alt="..." />
        <div className="carousel-caption  d-md-block ">
        <img src= {img6} className="img-fluid float-end mb-5 img-fluid" alt="..." />
        </div>
      </div>
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
 
    
    
    </>
  )
}

export default Slider