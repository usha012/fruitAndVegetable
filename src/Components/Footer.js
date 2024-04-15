import React from 'react'
import payment from "../Assets/Images/payment.png";

const Footer = () => {
  return (
    <>
       {/* footer start */}
       <div className="conatiner-fluid pt-5 mt-5 bg_gray_600 text_white_50 footer">
        <div className="container py-5">
          <div className="mb-4 pb-3 top_footer">
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text_primary mb-0">Fruitables</h1>
                  <p className="text_secondary mb-0">Fresh products</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input type="text" className="form-control rounded-pill border-0 w-100 py-3 px-4" placeholder="Your Email"/>
                  <button className="btn bg_primary border_secondary border-0 text_white position-absolute end-0 top-0 py-3 px-4 rounded-pill">Subscribe Now</button>

                </div>

              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a className="rounded-circle btn btn_md_square btn_outline_secondary p-3 me-2" href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a className="rounded-circle btn btn_md_square btn_outline_secondary p-3 me-2" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a className="rounded-circle btn btn_md_square btn_outline_secondary p-3 me-2" href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a className="rounded-circle btn btn_md_square btn_outline_secondary p-3 me-2" href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="footer_item">
                <h4 className="mb-3 text_light">Why People Like us!</h4>
                <p className="mb-4">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                <button className="btn border_secondary text_primary rounded-pill py-2 px-4">Reade More</button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_item d-flex flex-column">
                <h4 className="mb-3 text_light">Shop Info</h4>
                <a className="btn_link" href="#">About Us</a>
                <a className="btn_link" href="#">Contact Us</a>
                <a className="btn_link" href="#">Privacy Policy</a>
                <a className="btn_link" href="#">Terms & Condition</a>
                <a className="btn_link" href="#">Return Policy</a>
                <a className="btn_link" href="#">FAQs & Help</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_item d-flex flex-column">
                <h4 className="mb-3 text_light">Account</h4>
                <a className="btn_link" href="#">My Account</a>
                <a className="btn_link" href="#">Shop details</a>
                <a className="btn_link" href="#">Shopping Cart</a>
                <a className="btn_link" href="#">Wishlist</a>
                <a className="btn_link" href="#">Order History</a>
                <a className="btn_link" href="#">International Orders</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_item d-flex flex-column">
                <h4 className="mb-3 text_light">Contact</h4>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <img src={payment} className="img-fluid"/>
              </div>
            </div>





          </div>
        </div>
      </div>
      {/* footer end */}
      {/* copyright start */}
      <div className="container-fluid copyright bg_gray_600 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <span><a href="#"><i class="fa-solid fa-copyright me-2 text_white"></i>Your Site Name</a>, All right reserved.</span>              
            </div>
            <div className="col-lg-6 text-white my-auto text-end">
            Designed By 
             <a href="#" className="border-bottom"> Usha </a>
            Distributed By 
            <a href="#" className="border-bottom"> Usha </a>

            </div>



          </div>

        </div>

      </div>
      {/* copyright end */}
    </>
  )
}

export default Footer
