 import Navbar from "./Components/HomeComponents/Navbar/Navbar";
 import Footer from "./Components/Footer/Footer";
 import Home1 from "./Components/Home/Home1";
 import Cart from "./Components/Pages/Cart"
 import Blog from "./Components/Pages/Blog";
 import Address from "./Components/Pages/Address"
 import Profile from "./Components/Pages/Profile";
 import PrivateComp from "./Components/SignLog/PrivateComp";
 import Sign from "./Components/SignLog/Sign";
 import Log from "./Components/SignLog/Log";
 import ProductImages from "./Components/ProductPage/ProductImages";
 import Contact from "./Components/Pages/Contact";
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./Components/Pages/About";
import Testimonials from "./Components/Pages/Testimonials";
import PriceTable from "./Components/Pages/PriceTable";

function App() {
  
 
  return (
   <>

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route element={<PrivateComp/>}>
    <Route path = "/" element={<Home1/>}/>
    <Route path = "/cart" element={<Cart/>}/>
    <Route path = "/blog" element={<Blog/>}/>
    <Route path = "/items" element={<ProductImages/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/pro" element={<Profile/>}/>
    <Route path="/address" element={<Address/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/testimonias" element={<Testimonials/>}/>
    <Route path="/price" element={<PriceTable/>}/>
    </Route>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/log" element={<Log/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
