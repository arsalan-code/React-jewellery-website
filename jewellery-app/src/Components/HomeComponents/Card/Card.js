import React, { useState, useEffect } from 'react';
// import React from 'react';
import './Card.css'
import ring from '../../assets/images/1_grande.jpg'
 import ring1 from '../../assets/images/2_compact.jpg'
 import ring2 from '../../assets/images/6_03a522d6-f36a-4f59-a815-bbade4d87a6e_grande.jpg'
 import ring3 from '../../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_1024x1024.jpg'
 import ring4 from '../../assets/images/10_16854be2-a731-4970-984e-7f6e483d2405_grande.jpg'
 import ring5 from '../../assets/images/11_68ab6d0f-109c-429b-a903-4cbf60257806_grande.jpg'
import line from '../../assets/images/home_line.png';
import { Link } from 'react-router-dom';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
   getProducts()
  }, []);

  async function getProducts () {
    try {

  
      const response= await fetch("http://localhost:5000/getproduct",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
         
    })

    if(response.ok){
     const data = await response.json()
        console.log(data)
        setData(data);
    }
    else
    {
        const error=await response.json()
        // alert(error.message)
        console.log(error)
    

    }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    

  
    
      return (
        <>

          <div className="container popular-heading">
            <div className="row text-center">
              <div className="col-12">
                <div className="home-line">
                  <h3>NEW PRODUCTS</h3>
                  <img src={line} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </div>
          

        

              
                <div className="container product-list ">
                <div className="row">
                  {
                    data.map((items)=>{
                      return(
                        <div className="col-md-4 col-sm-6 col-12">
                        <div className="wrapper-img">
                         <Link to={"/items?id="+items.id}> <img src={ring} alt="" /> </Link>
                       
                            <hr /> 
        
                            <div className="sale">
                                <span className='disc'>{items.price}</span>
                            </div>
                            
                            <div className="content-3 d-flex justify-content-between ">
                                <p>{items.name}</p>
                                <span>{items.price}</span>
                            </div>
                            </div>
                        </div>
          
                      )
                    })
                  }
                  </div>
          </div>
                        
              

         
            
                  
                    {/* <div className="col-md-4 col-sm-6 col-12 ">
                    <div className="wrapper-img">
                        <img src={ring1} alt="" />
                        
    
                        <hr />
    
                        <div className="content-3 d-flex justify-content-between">
                            <p>Curabitur  cursus dignis</p>
                            <span>$259.00</span>
                        </div>
                        </div>
                    </div> */}
                  
    
               
                    {/* <div className="col-md-4 col-sm-6 col-12 ">
                    <div className="wrapper-img">
                        <img src={ring2} alt="" />
                     
                        <hr />
    
                        <div className="sale">
                            <span className='disc'>Sale</span>
                        </div>
                        
                        <div className="content-3 d-flex justify-content-between">
                            <p>Curabitur  cursus dignis</p>
                            <span>$259.00</span>
                        </div>
                        </div>
                    </div>    
            </div>
          </div>
     */}
          {/* <div className="container product-list mt-4 ">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="wrapper-img">
                        <img src={ring3} alt="" />
                        <hr />
    
                        <div className="content-3 d-flex justify-content-between ">
                            <p>Curabitur  cursus dignis</p>
                            <span>$259.00</span>
                        </div>
                        </div>
                    </div>
                    
             */}
                  
                    {/* <div className="col-md-4 col-sm-6 col-12 ">
                    <div className="wrapper-img">
                        <img src={ring4} alt="" />
                        
    
                        <hr />
    
                        <div className="sale">
                            <span className='disc'>Sale</span>
                        </div>
    
                        <div className="content-3 d-flex justify-content-between">
                            <p>Curabitur  cursus dignis</p>
                            <span>$259.00</span>
                        </div>
                        </div>
                    </div> */}
                  
    
               
                    {/* <div className="col-md-4 col-sm-6 col-12 ">
                    <div className="wrapper-img">
                        <img src={ring5} alt="" />
                     
                        <hr />
    
                        <div className="sale">
                            <span className='disc'>Sale</span>
                        </div>
                        
                        <div className="content-3 d-flex justify-content-between">
                            <p>Curabitur  cursus dignis</p>
                            <span>$259.00</span>
                        </div>
                        </div>
                    </div>     */}
           
        
        </>
      )
    
  }
  

export default Card