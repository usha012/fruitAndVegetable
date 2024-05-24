// import React, { useState } from "react";
// import { useRef } from "react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "../Components/Card";

import Header from "../Components/Header";
import heroSlide1 from "../Assets/Images/hero-img-1.png";
import heroSlide2 from "../Assets/Images/hero-img-2.jpg";
import fruitItem1 from "../Assets/Images/fruite-item-1.jpg";
import fruitItem2 from "../Assets/Images/fruite-item-2.jpg";
import fruitItem3 from "../Assets/Images/fruite-item-3.jpg";
import fruitItem4 from "../Assets/Images/fruite-item-4.jpg";
import fruitItem5 from "../Assets/Images/fruite-item-5.jpg";
import featur1 from "../Assets/Images/featur-1.jpg";
import featur2 from "../Assets/Images/featur-2.jpg";
import featur3 from "../Assets/Images/featur-3.jpg";
import banner1 from "../Assets/Images/baner-1.png";
import bestProduct1 from "../Assets/Images/best-product-1.jpg";
import bestProduct2 from "../Assets/Images/hero-img.jpg";
import testimonial1 from "../Assets/Images/testimonial-1.jpg";


import userEvent from "@testing-library/user-event";


  const Home = (props) => {

    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [tab, setTab] = useState("allProducts");

    const {image, name, description, price} = props


    const handleClickFruit=(select)=>{
      setTab(select)
    }
 
    const optionNew = {
      items: 4,
      nav: false,
      dots: false,
      loop: true,
      margin: 25,
    }
    const options = {
      items: 1,
      nav: false,
      dots: false,
      loop: true,
    };
    const testimonial ={
      items:2,
      nav:false,
      margin:25,
      dots:false,
      loop:true
    }
    const carouselRef = useRef(null);
    const carouselRef1 = useRef(null);
    const testCarouselRef = useRef(null);

    const handlePre = () => {
      if (carouselRef.current) {
        carouselRef.current.prev();
      }
    };
    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    };

    const handleVegPre = ()=>{
     if(carouselRef1.current){
      carouselRef1.current.prev()
     }
    }
    const handleVegNext = ()=>{
      if(carouselRef1.current){
        carouselRef1.current.next()
      }
    }

    const testPre=()=>{
      if(testCarouselRef.current){
        testCarouselRef.current.prev();
      }  
    }
    const testNext=()=>{
      if(testCarouselRef.current){
        testCarouselRef.current.next();
      }
    }
  
    const products = [
      {
        img:fruitItem5,
        title:"Grapes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem5,
        title:"Grapes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem2,
        title:"Raspberries",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem4,
        title:"Apricots",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem3,
        title:"Banana",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem1,
        title:"Oranges",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem2,
        title:"Raspberries",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
      {
        img:fruitItem5,
        title:"Grapes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        price:"$4.99 / kg"
      },
    ]

    const fruitsData = async()=>{
      const response = await fetch("http://localhost:8000/fruits");
      const fruitData = await response.json();
      setFruits(fruitData)
    }

    const vegetablesData = async ()=>{
    const response = await fetch ("http://localhost:8000/vegetables");
    const vegetableData = await response.json();
      setVegetables(vegetableData);
    }
    


    useEffect(()=>{
     fruitsData()
     vegetablesData()
    },[tab])

  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid hero-header py-5 mb-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-7">
              <h4 className="text_secondary mb-3 fw_600">100% Organic Foods</h4>
              <h1 className="text_primary mb-5 fs_56 fw_800">
                Organic Veggies & Fruits Foods
              </h1>
              <div className="position-relative me-auto w-75">
                <input
                  type="text"
                  className="shadow-none form-control border_secondary rounded-pill py-3 px-4 w-100 border_2 search_input"
                  placeholder="Search"
                />
                <button
                  type="button"
                  className="btn bg_primary h-100 text_white border_secondary border-2 rounded-pill py-3 px-4 position-absolute top-0 end-0"
                >
                  Submit Now
                </button>
              </div>
            </div>
            <div className="col-5">
              <div className="position-relative">
                <OwlCarousel
                  className="owl-theme header_carousel"
                  {...options}
                  ref={carouselRef}
                >
                  <div className="item">
                    <div className="border_rounded_10 overflow-hidden bg_secondary">
                      <img src={heroSlide1} className="h-100 w-100 img-fluid" />
                      <a
                        href="#"
                        className="text-white position-absolute top-50 end-50 start-50 fs_22 py-2 px-4 border_rounded_10"
                      >
                        Fruites
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="border_rounded_10 overflow-hidden">
                      <img src={heroSlide2} className="h-100 w-100 img-fluid" />
                      <a
                        href="#"
                        className="text-white position-absolute top-50 end-50 start-50 fs_22 py-2 px-4 border_rounded_10"
                      >
                        Vesitables
                      </a>
                    </div>
                  </div>
                </OwlCarousel>
                <button
                  className="btn carousel_control_pre rounded-circle position-absolute start-0 ms-4"
                  onClick={handlePre}
                >
                  <i className="fa-solid fa-chevron-left fa-lg"></i>
                </button>
                <button
                  className="btn carousel_control_next rounded-circle position-absolute end-0 me-4"
                  onClick={handleNext}
                >
                  <i className="fa-solid fa-chevron-right fa-lg "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features section  */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-3">
              <div className="featurs_item p-4 border_rounded_10 text-center">
                <div className="featurs_icon btn_square bg_secondary rounded-circle position-relative mb-5 mx-auto">
                  <i className="fa-solid fa-car-side fa-2xl text-white fs_42"></i>
                </div>
                <div className="featurs_content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featurs_item p-4 border_rounded_10 text-center">
                <div className="featurs_icon btn_square bg_secondary rounded-circle position-relative mb-5 mx-auto">
                  <i className="fa-solid fa-user-shield fa-2xl text-white fs_42"></i>
                </div>
                <div className="featurs_content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featurs_item p-4 border_rounded_10 text-center">
                <div className="featurs_icon btn_square bg_secondary rounded-circle position-relative mb-5 mx-auto">
                  <i className="fa-solid fa-exchange-alt fa-2xl text-white fs_42"></i>
                </div>
                <div className="featurs_content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featurs_item p-4 border_rounded_10 text-center">
                <div className="featurs_icon btn_square bg_secondary rounded-circle position-relative mb-5 mx-auto">
                  <i className="fa-solid fa-phone-alt fa-2xl text-white fs_42"></i>
                </div>
                <div className="featurs_content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end  */}
      {/* all products shop start */}
      <div className="container-fluid allProducts_shop py-5">
        <div className="container py-5">
          <div className="tab_class text-center">
            <div className="row">
              <div className="col-4 text-start">
                <h1>Our Organic Products</h1>
              </div>
              <div className="col-8 text-end">
                <div className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <Link
                      className={`${tab === "allProducts"? "active":""} rounded-pill tab_pill  py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("allProducts")}
                    >
                      <span className="fs_15">All Products</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`${tab === "vegetable"? "active":""} rounded-pill tab_pill py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("vegetable")}
                    >
                      <span className="fs_15">Vegetables</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${tab === "fruit"? "active":""} rounded-pill tab_pill py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("fruit")}
                    >
                      <span className="fs_15">Fruits</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${tab === "bread"? "active":""} rounded-pill tab_pill py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("bread")}
                    >
                      <span className="fs_15">Bread</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${tab === "meat"? "active":""} rounded-pill tab_pill py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("meat")}
                    >
                      <span className="fs_15">Meat</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${tab === "milk"? "active":""} rounded-pill tab_pill py-2 text-center m-2 d-flex`} onClick={()=> handleClickFruit("milk")}
                    >
                      <span className="fs_15">Milk</span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="tab_content">
            {
              tab === "allProducts"?
              <>
              <div className="row g-4 mb-4">
              {fruits.slice(0, 8).map((fruit, index) => (
                <div className="col-3 text-center">
                  <Card  data={fruit} />
                </div>
              ))} 
              </div>
              <div className="row g-4">
              {vegetables.slice(0,8).map((veg, index) => (
                <div className="col-3 text-center">
                   <Card data={veg} />
                </div>
              ))} 
              </div>
            </>
              :
              ""
            }
            {
              tab === "fruit"?
              <div className="row g-4">
              {fruits.slice(0, 8).map((fruit, index) => (
                <div className="col-3 text-center">
                  <Card data={fruit} />
                </div>
              ))} 
              </div>:
            ""
            }
            {
              tab === "vegetable"?
              <div className="row g-4">
              {vegetables.slice(0, 8).map((veg, index) => (
                <div className="col-3 text-center">
                  <div className="card_fruit_item">
                    <div className="fruit_img border_rounded_top_10 overflow-hidden">
                      <img
                        src={veg.image}
                        className="img-fluid border_rounded_top_10"
                      />
                    </div>
                    <div className="border border_secondary border-top-0 border_rounded_bottom_10 p-4">
                      <h4>{veg.name}</h4>
                      <p>{veg.description}</p>
                      <div className="d-flex justify-content-between">
                        <p className="text-gray-600 fw_600 fs_19 mb-0">
                          {veg.price}
                        </p>
                        <a
                          href="#"
                          className="rounded-pill btn border px-3 border_secondary text_primary"
                        >
                          <i className="fa fa-shopping-bag me-3 fa-lg text_primary"></i>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))} 
              </div>
              :
              ""
            }
            {
              tab === "bread"?
              "bread":
              ""
            }
            {
              tab === "meat"?
              "meat":
              ""
            }
            {
              tab === "milk"?
              "milk":
              ""
            }
          </div>
        </div>
      </div>
      {/* all products shop end */}
      {/* service start */}
      <div className="container-fluid py-5 service">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <a href="#">
                <div className="service_item border_rounded_10 border border_secondary bg_secondary">
                  <div className="service_img">
                    <img
                      src={featur1}
                      className="img-fluid border_rounded_top_10 h-100 w-100"
                    />
                  </div>

                  <div className="px-4">
                    <div className="service_content bg_primary rounded border_rounded_10 p-4 text-center">
                      <h5 className="text_white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <div className="service_item border_rounded_10 border border_gray_600 bg_gray_600">
                  <div className="service_img">
                    <img
                      src={featur2}
                      className="img-fluid border_rounded_top_10 w-100 h-100"
                    />
                  </div>
                  <div className="px-4">
                    <div className="service_content bg_white rounded border_rounded_10 p-4 text-center">
                      <h5 className="text_primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="#">
                <div className="service_item border_rounded_10 border border_primary bg_primary">
                  <div className="service_img">
                    <img
                      src={featur3}
                      className="img-fluid border_rounded_top_10 w-100 h-100"
                    />
                  </div>
                  <div className="px-4">
                    <div className="service_content bg_secondary rounded border_rounded_10 p-4 text-center">
                      <h5 className="text_white">Exotic Vegitable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* service end */}
      {/* vegetable carousel strat */}
      <div className="conatiner-fluid vegetable_carousel py-5">
        <div className="container py-5">
          <div className="row position-relative">
            <h1 className="mb-0">Fresh Organic Vegetables</h1>
            {
              vegetables.length 
              ?
              <OwlCarousel
                className="owl-theme my-5"
                {...optionNew}
                ref={carouselRef1}
              >
                { vegetables?.map((veg, i) => (
                  <div className="item" key={i}>
                    {/* <div className="card_fruit_item">
                      <div className="fruit_img border_rounded_top_10 overflow-hidden">
                        <img
                          src={veg.image}
                          className="img-fluid border_rounded_top_10"
                        />
                      </div>
                      <div className="border border_secondary border-top-0 border_rounded_bottom_10 p-4">
                        <h4>{veg.name}</h4>
                        <p>{veg.description}</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-gray-600 fw_600 fs_19 mb-0">
                            {veg.price}
                          </p>
                          <a
                            href="#"
                            className="rounded-pill btn border px-3 border_secondary text_primary"
                          >
                            <i className="fa fa-shopping-bag me-3 fa-lg text_primary"></i>
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <Card data={veg} />
                  </div>
                ))}
              </OwlCarousel>
              :
              ""
            }
            <div className="owlcarousel_nav">
              <button
                className="btn border_secondary border border_rounded_20 pre text_primary"
                onClick={handleVegPre}
              >
                {" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button
                className="btn border_secondary border border_rounded_20 text_primary next"
                onClick={handleVegNext}
              >
                <i className="fa-solid fa-arrow-left"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* vegetable carousel end */}
      {/* Banner setion start */}
      <div className="conatiner-fluid banner bg_secondary my-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="text_white fs_56">Fresh Exotic Fruits</h1>
                <p className="text_gray_600 fs_56 mb-4">in Our Store</p>
                <p className="text_gray_600 mb-4">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <a
                  href="#"
                  className="btn border border_white rounded-pill banner_btn border_2 text_gray_600 py-3 px-5"
                >
                  BUY
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img src={banner1} className="img-fluid" />
                <div className="banner_badge rounded-circle bg_white text_gray_600 d-flex position-absolute justify-content-center align-items-center top-0 start-0">
                  <h1 className="fs_70">1</h1>
                  <div className="d-flex flex-column">
                    <h2 className="fs_29 mb-0">50$</h2>
                    <h4 className="fs_22 text-muted mb-0">kg</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner setion end */}
      {/* bestsaler products start */}
      <div className="container-fluid bestsaler_products py-5">
        <div className="container py-5">
          <div className="row text-center justify-content-center">
            <div className="col-6">
              <h1 className="fs_43 fw_800">Bestseller Products</h1>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
          </div>
          <div className="row g-4 mb-4">

          {
            vegetables.slice(0,6).map((veg,index)=>(
                <div className="col-lg-4">
                <div className="rounded p-4">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="card_img_wrapper">
                      <img src={veg.image} className="img-fluid rounded-circle"/>
                    </div> 
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">{veg.name}</a>
                    <div className="d-flex my-3">
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <h4 className="mb-3">{veg.price}</h4>
                    <a href="#" className="btn border border_secondary rounded-pill px-3 text_primary"> 
                    <i className="fa-solid fa-bag-shopping fa-lg me-2"></i> Add to cart
                    </a>
                  </div>
  
                </div>
  
                </div>
  
                </div>
            ))
          }
          </div>
          <div className="row g-4"> 
            {/* square */}
             {
              vegetables.slice(6,10).map((veg,index)=>(
                <div className="col-3">
                <div className="squareCard_img_wrapper border_rounded_10">
                  <img src={veg.image} className="img-fluid border_rounded_10"/>
                </div>
                <div className="text-center py-4">
                  <a href="#" className="h5">{veg.name}</a>
                  <div className="d-flex justify-content-center my-3">
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star text_primary"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h4 className="mb-3">{veg.price}</h4>
                  <a href="#" className="btn border border_secondary rounded-pill px-3 text_primary"> 
                    <i className="fa-solid fa-bag-shopping fa-lg me-2"></i> Add to cart
                    </a>
                </div>
  
              </div>
              ))
             }
          </div>
        </div>
      </div>
      {/* bestsaler products end */}
      {/* fact start */}
      <div className="container-fluid py-5">
        <div className="container bg_light p-5 border_rounded_10">
          <div className="row g-4">
            <div className="col-3">
              <div className="counter p-5 border_rounded_10 bg_white">
                <i className="fa-solid fa-users text_secondary fs_56 mb-3"></i>
                <h3 className="text_primary">satisfied customers</h3>
                <h1>1963</h1>

              </div>


            </div>
            <div className="col-3">
              <div className="counter p-5 border_rounded_10 bg_white">
                <i className="fa-solid fa-users text_secondary fs_56 mb-3"></i>
                <h3 className="text_primary">quality of service</h3>
                <h1>99%</h1>

              </div>


            </div>
            <div className="col-3">
              <div className="counter p-5 border_rounded_10 bg_white">
                <i className="fa-solid fa-users text_secondary fs_56 mb-3"></i>
                <h3 className="text_primary">quality certificates</h3>
                <h1>33</h1>

              </div>


            </div>
            <div className="col-3">
              <div className="counter p-5 border_rounded_10 bg_white">
                <i className="fa-solid fa-users text_secondary fs_56 mb-3"></i>
                <h3 className="text_primary">Available Products</h3>
                <h1>789</h1>

              </div>


            </div>

          </div>

        </div>

      </div>
      {/* fact end */}
      {/* testimonial start */}
      <div className="container-fluid py-5 testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <h3 className="text_primary">Our Testimonial</h3>
              <h1 className="text_gray_600 fs_42 fw_800 mb-5">Our Client Saying!</h1>

            </div>

          </div>
          <div className="row position-relative testimonial_carousel py-5 ">
            <div>
              <button className="next btn rounded-pill border_secondary text_primary position-absolute top-0 end-0" onClick={testNext}><i className="fa-solid fa-arrow-right"></i></button>
              <button className="pre btn rounded-pill border_secondary text_primary position-absolute top-0" onClick={testPre}><i className="fa-solid fa-arrow-left"></i></button>
            </div>

            <OwlCarousel className='owl-theme' {...testimonial} ref={testCarouselRef}>
              <div className='item'>
                  <div className="testimonial_item border_rounded_10 bg_light p-4">
                    <div className="position-relative">
                    <i className="fa-solid fa-quote-right fs_39 text_secondary position-absolute bottom-0 end-0"></i>
                      <div className="border-bottom border_secondary mb-4">
                        <p>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <div className="d-flex">
                        <div className="testimonial_item_img border_rounded_10">
                          <img className="img-fluid border_rounded_10 rounded" src={testimonial1}/>
                        </div>

                        <div className="ms-4">
                          <h4 className="text_dark">Client Name</h4>
                          <p>Profession</p>
                          <div className="d-flex my-3">
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
              <div className='item'>
              <div className="testimonial_item border_rounded_10 bg_light p-4">
                    <div className="position-relative">
                    <i className="fa-solid fa-quote-right fs_39 text_secondary position-absolute bottom-0 end-0"></i>
                      <div className="border-bottom border_secondary mb-4">
                        <p>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <div className="d-flex">
                        <div className="testimonial_item_img border_rounded_10">
                          <img className="img-fluid border_rounded_10 rounded" src={testimonial1}/>
                        </div>

                        <div className="ms-4">
                          <h4 className="text_dark">Client Name</h4>
                          <p>Profession</p>
                          <div className="d-flex my-3">
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
              <div className='item'>
              <div className="testimonial_item border_rounded_10 bg_light p-4">
                    <div className="position-relative">
                    <i className="fa-solid fa-quote-right fs_39 text_secondary position-absolute bottom-0 end-0"></i>
                      <div className="border-bottom border_secondary mb-4">
                        <p>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                      <div className="d-flex">
                        <div className="testimonial_item_img border_rounded_10">
                          <img className="img-fluid border_rounded_10 rounded" src={testimonial1}/>
                        </div>

                        <div className="ms-4">
                          <h4 className="text_dark">Client Name</h4>
                          <p>Profession</p>
                          <div className="d-flex my-3">
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star text_primary"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* testimonial end */}

    </>
  );
};

export default Home;
