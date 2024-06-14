import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Stylesheet/contact.css'

const Contact  = () => {

        const[name, setName]=useState('')
        const[email, setEmail]=useState('')
        const[msg, setMsg]=useState('')

       let handleSubmit =async(e)=>{
            e.preventDefault()

            try
            {
                if(name, email, msg)
                {
                axios.post("http://localhost:5000/contact",{
                    name, email, msg
                })
                alert("Form Submitted")
            }
                
            }
            catch
            {
                    console.log(e)
            }
        }

    return (
        <>
            <div className="blog-container">
                <ul className='blog-list'>
                    <li className='navItems'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navItems'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* .............Contact Page....................  */}
            <div className="contact-page">
                <div className="container">
                    <h3>DROP US A LINE</h3>
                    <div className="row ">
                        <div className="col-md-6 col-12">
                            <form action="POST" onSubmit={handleSubmit}>
                                <div className='form-fled'>
                                    <label htmlFor="Username">Username</label>
                                    <input type="text" id='Username' onChange={(e)=> {setName(e.target.value)}} />
                                </div>

                                <div className='form-fled'>
                                    <label htmlFor="Useremail">Useremail</label>
                                    <input type="text" onChange={(e)=> {setEmail(e.target.value)}} id='Useremail' />
                                </div>

                                <div className='form-fled'>
                                    <label htmlFor="Usermessage">Your Message </label>
                                    <textarea name="" id="Usermessage"  cols="70" rows="6"   onChange={(e)=> {setMsg(e.target.value)}}  ></textarea>

                                </div>
                                <button className='btn btn-danger'>Submit Contact</button>

                            </form>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="right-content">
                                <div className="content-icons ">
                                    <i className="fa fa-home"></i>
                                    <span>CONTACT INFORMATION</span>
                                </div>
                                <div className="office-adrress">
                                    <h3>OFFICE ADDRESS</h3>
                                    <p>249 Ung Van Khiem Street, Binh Thanh Dist, HCM city+84 0123456xxx</p>

                                    <div className="support-icons">
                                    <i className="fa fa-message"></i>
                                    <span>support@themeforshop.com</span>
                                </div>

                                </div>
                                <div className="social-icons mt-5">
                                    <span>FOLLOW US ON </span>
                                    <div className="inner-icons">
                                    <i class="fa-brands fa-facebook" style={{color:"#316FF6"}}></i>
                                    <i class="fa-brands fa-twitter" style={{color:"#1DA1F2"}}></i>
                                    <i class="fab fa-google" style={{color:"#34A853"}}></i>
                                    <i class="fab fa-pinterest" style={{color:"#E60023"}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710099742!2d80.7776964413921!3d26.848902831205773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709537559144!5m2!1sen!2sin" width={"100%"} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />



        </>
    )
}

export default Contact