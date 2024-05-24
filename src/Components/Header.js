import React from 'react'
import {Link} from "react-router-dom"
import Cart from '../Pages/Cart'

const Header = () => {
  return (
<>
<div className='container-fluid'>
  <div className='container topbar bg_primary p-3 d-none d-lg-block'>
    <div className='d-flex justify-content-between '>
      <div className='top_info ps-2'>
        <small><a href="#" className='text-white'> 123 Street, New York</a></small>
        <small><a href="#" className='text-white'> Email@Example.com</a></small>


      </div>
      <div className='top_links pe-2'>
      <a href="#" className="text_white"><small className="text_white mx-2">Privacy Policy</small>/</a>
      <a href="#" className="text_white"><small className="text_white mx-2">Terms of Use</small>/</a>
      <a href="#" className="text_white"><small className="text_white ms-2">Sales and Refunds</small></a>

      </div>
    </div>
    
  </div>
</div>
  <div className='container-fluid sticky-top bg-white'>
    <div className='container'>
      <nav className="navbar navbar-expand-lg main_navbar bg-white ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h1 className='text_primary fs_37 fw_800'> Fruitables</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">shop</a> */}
                <Link className="nav-link" to="/shop">shop</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">shop</a> */}
                <Link className="nav-link" to="/vegetableshop">VegShop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">My Orders</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className='search_btn border_secondary btn me-4'>
                <i className="fa-solid fa-magnifying-glass text_primary"></i>
              </button>

              <Link to="/cart" className='position-relative  me-4 my-auto'>
              <i className="fa-solid fa-bag-shopping fa-2xl text_primary"></i>
              <span className='shopping_count position-absolute text_dark bg_secondary p-0 rounded-circle d-flex justify-content-center align-items-center btn_badge'>3</span>
              </Link>
              <a href="#" className='my-auto'>
              <i className="fa-solid fa-user fa-2xl text_primary"></i>
              </a>
            </form> 
          </div>
        </div>
      </nav>

    </div>

  </div>

</>
  )
}

export default Header
