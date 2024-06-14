import React from 'react'
import { Link } from 'react-router-dom';
import './Stylesheet/test.css'
import Newsletter from '../Newsletter/Newsletter';
import test from '../assets/images/image1.png'
import test1 from '../assets/images/image2.png'
import test2 from '../assets/images/image3.png'
import test3 from '../assets/images/image4.png'
function Testimonials() {
    return (
        <>
            <div className="blog-container">
                <ul className='blog-list'>
                    <li className='navItems'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navItems'>
                        <Link to="/testimonias"> Testimonial</Link>
                    </li>
                </ul>
            </div>

            <section id="testimomial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <img src={ test} className='img-fluid' alt="" />
                            <span>
                                Beautifully Brutal and  Visceral.</span>
                                <div className="content">
                                <p>Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.</p>
                                <small>JOHN SMITH</small>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={test1 } className='img-fluid' alt="" />
                            <span>
                                Exactly what i needed to be.</span>
                            <div className="content">
                                <p>Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.</p>
                                <small>JOHN SMITH</small>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5">
                            <img src={ test2} className='img-fluid' alt="" />
                            <span>
                            What a Lovely Day!.</span>
                                <div className="content">
                                <p>Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.</p>
                                <small>JOHN SMITH</small>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-5">
                            <img src={test3 } className='img-fluid' alt="" />
                            <span>
                            Hold onto your seats for a visual</span>
                            <div className="content">
                                <p>Transform indicator overcome injustice pursue these aspirations natural resources. Maintain, social analysis Bloomberg; accelerate planned giving. Revitalize economic independence, foundation sharing economy, rights-based approach medical supplies eradicate celebrate informal economies. International medicine social worker participatory monitoring Bill and Melinda Gates our ambitions justice relief transform the world.</p>
                                <small>JOHN SMITH</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />

        </>
    )
}

export default Testimonials     