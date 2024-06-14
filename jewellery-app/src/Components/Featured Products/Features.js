import React from 'react'
import './Feature.css'
import img1 from './../assets/images/1_grande.jpg'
import img2 from './../assets/images/2_119a31f2-2054-4483-93a3-841310e6bdfb_grande.jpg'
import img3 from './../assets/images/6_03a522d6-f36a-4f59-a815-bbade4d87a6e_grande.jpg'
import img4 from './../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_grande.jpg'
import Line from './../assets/images/home_line.png'
import Carous from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Features() {

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
                            <img src={Line} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  feature-wrapping mt-5">
                <div className="row text-center">
                    <Carous responsive={responsive}>
                        <div className='card'>
                            <img src={img1} alt="bracelet" />
                            <hr />
                            <div className="sale">
                                <span className='disc'>Sale</span>
                            </div>

                            <div className="content-3 d-flex justify-content-between ">
                                <p>Curabitur  cursus dignis</p>
                                <span>$259.00</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={img2} alt="bracelet" />
                            <hr />
                           
                            <div className="content-3 d-flex justify-content-between ">
                                <p>Curabitur  cursus dignis</p>
                                <span>$259.00</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={img3} alt="bracelet" />
                            <hr />
                            <div className="sale">
                                <span className='disc'>Sale</span>
                            </div>
                            <div className="content-3 d-flex justify-content-between ">
                                <p>Curabitur  cursus dignis</p>
                                <span>$259.00</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={img4} alt="bracelet" />
                            <hr />
                            <div className="sale">
                                <span className='disc'>Sale</span>
                            </div>

                            <div className="content-3 d-flex justify-content-between ">
                                <p>Curabitur  cursus dignis</p>
                                <span>$259.00</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={img1} alt="bracelet" />
                            <hr />
                            <div className="sale">
                                <span className='disc'>Sale</span>
                            </div>

                            <div className="content-3 d-flex justify-content-between ">
                                <p>Curabitur  cursus dignis</p>
                                <span>$259.00</span>
                            </div>
                        </div>
                    </Carous>;
                </div>
            </div>


        </>
    )
}

export default Features