import React from 'react'
import Slider from '../HomeComponents/Slider/Slider'
import Product from '../HomeComponents/Product/Product'
import Card from '../HomeComponents/Card/Card'
import Category from '../HomeComponents/SubCategory/Category'
import Banner from '../Banner Wrapper/Banner'
import Latest from '../HomeComponents/Latest News/Latest'
import Feature from '../Featured Products/Features'
import Brands from '../Feature Brand/Brands'
import Newletter from '../Newsletter/Newsletter'
 
 


function Home1() {

  return (
   <>

   <Slider/>
   <Product/>
   <Card/>
   <Category/>
   <Banner/>
   <Latest/>
   <Feature/>
   <Brands/>
   <Newletter/>
  
   </>
  )
}

export default Home1