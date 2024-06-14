import React from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const email = localStorage.getItem('email')
  const Navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    Navigate('/log')
  }
  return (
    <>

      {/* .....Navbar Start.............  */}

      <div classname="header-section">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/"> <div className="logo">
              <img src={logo} className='img-fluid' alt="" />
            </div> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
             
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className='dropdown-item' to='/about'>ABOUT US</Link>
                      </li>
                      <li>
                      <Link className='dropdown-item' to='/testimonias'>Testimonials</Link>
                      </li>
                      <li>
                      <Link className='dropdown-item' to='/price'>Price Table</Link>
                      </li>
                  </ul>
                </li>

                 <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>

                <form className="d-flex  search-role">
                  <i class="fas fa-search"></i>
                  <div className="inner-form">
                    <input type="search" placeholder='Search something..' />
                  </div>
                </form>
                <li className="nav-item px-2">
                  <Link className="nav-link active" aria-current="page" to="/pro">Account</Link>
                </li>

                <form className="d-flex btn-left">
                  {email ? <Link onClick={Logout} to="/Log"> <button className="btn btn-danger" type="submit">
                    Log Out</button></Link> : <Link to="/sign"></Link>}</form>

              </ul>


            </div>
          </div>
        </nav>
      </div>


      {/* .....Navbar End.............  */}


    </>
  )
}

export default Navbar