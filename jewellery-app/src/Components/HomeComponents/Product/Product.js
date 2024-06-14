import React,{useEffect, useState} from 'react'
import './product.css'
import img1 from '../../assets/images/3_large.png'
import img2 from '../../assets/images/2_large.png'
import img3 from '../../assets/images/1_79ec3305-7c83-4daa-804c-fac19b2d1b7b_large.png'
import img4 from '../../assets/images/4_large.png'
import line from '../../assets/images/home_line.png'
import Carous from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 


function Product() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getProducts()
  // }, []);

  // async function getProducts () {
  //   try {
  //     const response= await fetch("http://localhost:5000/getallcategories",{
  //       method:"post",
  //       headers:{
  //           "Content-Type":"application/json",
  //       },
         
  //   })

  //   if(response.ok){
  //    const data = await response.json()
  //       // console.log(data)
  //       setData(data);
  //   }
  //   else
  //   {
  //       const error=await response.json()
  //       // alert(error.message)
  //       console.log(error)
    

  //   }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  
    


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
              <h3>POPULAR COLLECTIONS</h3>
              <img src={line} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>

    <div className="container  wrapping">
      <div className="row text-center">
  <Carous responsive={responsive}>

  <div class="hover2">
  <div className='card'>
    <img src={img1} className='img-fluid'/>
    <div className="content">
      <h2>Woman Collection</h2>
       
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img2} className='img-fluid'/>
    <div className="content">
    <h2>Woman Collection</h2>
      
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img3} className='img-fluid'/>
    <div className="content">
    <h2>Woman Collection</h2>
       
    </div>
  </div>
  </div>
  <div class="hover2">
  <div className='card'>
    <img src={img4} className='img-fluid'/>
    <div className="content">
    <h2>Woman Collection</h2>
      
    </div>
  </div>
  </div>
 
        
      
    
    
</Carous>;
</div>
  </div>
    
    
    </>
   )
}

export default Product