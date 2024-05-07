import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const ProductSlider = (props) => {
    
    const [vegetables, setVegetables] = useState([]);
    const allData = useSelector((state)=> state.fruits)

    const sliderData = ()=>{
      const filterSlider = allData?.filter((data, i)=>data?.type === props?.type)
      setVegetables(filterSlider)
    }



    const optionNew = {
        items: 4,
        nav: false,
        dots: false,
        loop: true,
        margin: 25,
      }
    // const vegetablesData = async ()=>{
    //     const response = await fetch ("http://localhost:8000/vegetables");
    //     const vegetableData = await response.json();
    //       setVegetables(vegetableData);
    // }

    const carouselRef1 = useRef(null);

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

    useEffect(()=>{
        // vegetablesData()
        sliderData()
    },[props.type, allData])
  return (
    <>
    <div className="conatiner-fluid vegetable_carousel py-5">
        <div className="container py-5">
          <div className="row position-relative">
            <h1 className="mb-0">Related products</h1>
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
      
    </>
  )
}

export default ProductSlider
