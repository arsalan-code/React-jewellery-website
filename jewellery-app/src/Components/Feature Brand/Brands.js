import React from 'react'
import './Brand.css'
import Carous from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/images/partners_logo_3.png'
import img2 from '../assets/images/partners_logo_5.png'
import img3 from '../assets/images/partners_logo_4.png'
import img4 from '../assets/images/partners_logo_6.png'
import img5 from '../assets/images/partners_logo_7.png'
import line from '../assets/images/home_line.png'

function Brands() {
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
                            <h3>FEATURED PRODUCTS</h3>
                            <img src={line} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  feature-brands mt-5">
                <div className="row text-center">
                    <Carous responsive={responsive}>
                        <div className='card'>
                            <img src={img1} alt="bracelet" />

                        </div>

                        <div className='card'>
                            <img src={img2} alt="bracelet" />

                        </div>

                        <div className='card'>
                            <img src={img3} alt="bracelet" />

                        </div>

                        <div className='card'>
                            <img src={img4} alt="bracelet" />

                        </div>

                        <div className='card'>
                            <img src={img5} alt="bracelet" />

                        </div>
                    </Carous>;
                </div>
            </div>


        </>
    )
}

export default Brands