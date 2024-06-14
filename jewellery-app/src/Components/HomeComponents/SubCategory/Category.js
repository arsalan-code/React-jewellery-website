import React from 'react'
import line from '../../assets/images/home_line.png'
import img1 from '../../assets/images/3_large.png'
import img2 from '../../assets/images/2_large.png'
import img3 from '../../assets/images/1_79ec3305-7c83-4daa-804c-fac19b2d1b7b_large.png'
import img4 from '../../assets/images/4_large.png'
import Carousel from 'react-multi-carousel'

function Category() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
  <>
  
  <div className="container popular-heading">
        <div className="row text-center">
          <div className="col-12">
            <div className="home-line">
              <h3>Category COLLECTIONS</h3>
              <img src={line} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>
  
      <div className="container  wrapping">
      <div className="row text-center">
  <Carousel responsive={responsive}>
    <div class="hover2">
  <div className='card'>
    <img src={img1} alt="bracelet" />
    <div className="content">
      <h2>BRACELETS</h2>
      <p>See the Collection</p>
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img2} alt="bracelet" />
    <div className="content">
      <h2>EARRINGS</h2>
      <p>See the Collection</p>
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img3} alt="bracelet" />
    <div className="content">
      <h2>NECKLACES</h2>
      <p>See the Collection</p>
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img4} alt="bracelet" />
    <div className="content">
      <h2>RINGS</h2>
      <p>See the Collection</p>
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img1} alt="bracelet" />
    <div className="content">
      <h2>BRACELETS</h2>
      <p>See the Collection</p>
    </div>
  </div>
  </div>
</Carousel>;
</div>
  </div>

  </>
  )
}

export default Category     