 import React,{useEffect, useState} from "react";
import './product.css'
import '../Newsletter/Newsletter'
import small from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_compact.jpg'
import small1 from '../assets/images/5_9c4bb547-32eb-42ea-bed5-2f1fc3832c2e_compact.jpg'
import small2 from '../assets/images/6_2b8df768-6599-4e41-ae4c-2d6afd2b1d95_compact.jpg'
import small3 from '../assets/images/7_15911c75-e357-4cc1-a903-950a8ed4b779_small.jpg'

import big from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_1024x1024.jpg'
import big1 from '../assets/images/5_a774d2ff-edcb-44b7-99e6-4b4b11d6531e_grande.jpg'
import big2 from '../assets/images/6_03a522d6-f36a-4f59-a815-bbade4d87a6e_grande.jpg'
import big3 from '../assets/images/7_15911c75-e357-4cc1-a903-950a8ed4b779_grande.jpg'

import mainImg from '../assets/images/4_0fe2529b-f7ae-4ed5-a8ff-4fae623757f9_1024x1024.jpg'
import Newsletter from '../Newsletter/Newsletter'

function ProductImages() {
    var user_id;
    
    
   
    
    user_id=localStorage.getItem("add_id");
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

  async function  handleClick(){
  const  price=data.price;
    var product_id=id,status=0,quantity=1,discount=0,total_price=price,cuponcode='';
    try {
        
        const response= await fetch("http://localhost:5000/setaddtocart",{
        
          method:"post",
          headers:{
              "Content-Type":"application/json",
          },
          body: JSON.stringify({user_id,product_id,status,quantity,price,discount,total_price,cuponcode})
          
           
      })
  
      if(response.ok){
       const data = await response.json()
          console.log(data)
        //   
         
          
      }
      else
      {
          const error=await response.json()
        //   alert(error.message)
          console.log(error)
      
  
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

  }


 

    
    const clickImg = (smallImg) => {
        var fullImg = document.getElementById("imgbox");
        console.log(smallImg);
        fullImg.src = smallImg.target.alt
    }


    const [data, setData] = useState([]);

    useEffect(() => {
     getproducts()
    }, []);
  
    async function getproducts () {
      try {
        
        const response= await fetch("http://localhost:5000/getproductbyid",{

          method:"post",
          headers:{
              "Content-Type":"application/json",
          },
          body: JSON.stringify({id})
           
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

            <div className="product-images">
                <div className="container">
                    <h2 className="text-center "> Donec Condime Fermentum </h2>
                    <div className="wrapper">
                        <div className="product-box">
                            <div className="all-images">
                                <div className="small-images">
                                    <img src={small} alt={big} className="img-fluid" onClick={clickImg} />
                                    <img src={small1} alt={big1} className="img-fluid" onClick={clickImg} />
                                    <img src={small2} alt={big2} className="img-fluid" onClick={clickImg} />
                                    <img src={small3} alt={big3} className="img-fluid" onClick={clickImg} />
                                </div>


                                <div className="main-image">
                                    <img src={mainImg} className="img-fluid" id='imgbox' />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ...........Product Description..................  */}

                            <div className="product-desc mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-md-6 col-12">
                            <div className="content-desc">
                                <h4>Product Descriptions</h4>
                                <p>{data.discription}</p>
                                    <div className="tags">
                                        <h6>Tags :</h6>
                                          <span>{data.tags}</span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="price">
                                <span>{data.price}</span>
                            </div>
                            <div className="add-cart mt-3">
                                
                            <button onClick={handleClick}>Add to cart</button>
                                    
                                </div>
                        </div>
                    </div>
                </div>
             </div>     
                        
                    
                


               

                    )
                

            
               <Newsletter/> 

        </>
    )
}

export default ProductImages