import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import MultiRangeSlider from "multi-range-slider-react";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import axios from 'axios';
import featur1 from "../Assets/Images/featur-1.jpg";
import featur2 from "../Assets/Images/featur-2.jpg";
import featur3 from "../Assets/Images/featur-3.jpg";
import bannerFruit from "../Assets/Images/banner-fruits.jpg";

const VegetableShop = () => {
    const options = [
        { value: '', label: 'Nothing'},
        { value: 'organic', label: 'organic'},
        { value: 'fresh', label: 'fresh' },
    ];


    // const [fruits, setFruits] = useState([]);
    const [filterObj, setFilterObj] = useState({minRange:0, maxRange:100, minValue: 0, maxValue: 100, sorting: options[0]})
    const [filteredFruits, setFilteredFruits] = useState([])
    // const [minValue, set_minValue] = useState();
    // const [maxValue, set_maxValue] = useState();
    // const [selectedOption, setSelectedOption] = useState(options[0]);
    // console.log(selectedOption.value,"selcted")


    const handleInput = (e) => { 
        // set_minValue(e.minValue);    
        // set_maxValue(e.maxValue);
        console.log(111111111)
        setFilterObj({...filterObj, minValue:e.minValue, maxValue:e.maxValue})
    };

    const rangeOptions = {
        barLeftColor: "transparent",
        barRightColor: "transparent",
        barInnerColor: "#ffb524",
        thumbLeftColor: "#81c408",
        thumbRightColor: "#81c408",
        ruler:false,
        // maxCaption:filterObj.maxValue,
        label:false

    }

    const fruit = useSelector((state)=> state.fruits)
    // const fruitsData = async()=>{
    //     const response = await axios.get("http://localhost:8000/all");
    //     setFruits(response.data)
    //     setFilteredFruits(response.data)
    // }


    const handleData=()=>{
        let productData = fruit;
        console.log(productData,"aaaaaaaaaaa")

        if(filterObj?.search){
            productData = productData.filter((el, index)=>(
                el.name.toLowerCase().includes(filterObj.search.toLowerCase()) ||
                el.type.toLowerCase().includes(filterObj.search.toLowerCase())||
                el. color.toLowerCase().includes(filterObj.search.toLowerCase())
            ))    
            console.log(11111)
        }
        if(filterObj?.type){
            console.log(22222)
            productData = productData.filter((el, index)=>(
                el.type === filterObj.type
            ))   
        }
        // if(filterObj?.minRange && filterObj?.maxRange){
            //     productData = productData.filter((el, index)=>(
                //         Number(el.price) >= Number(filterObj.minRange) &&
                //         Number(el.price) <= Number(filterObj.maxRange)
        //     ))
            
        // }

        // if( filterObj?.maxValue){
            console.log(Number(filterObj.minValue) , filterObj.minValue, 909090909)
            productData = productData.filter((el, index)=>(
                Number(el.price) >= Number(filterObj.minValue) &&
                Number(el.price) <= Number(filterObj.maxValue) 
            ))
            // console.log(productData.price, filterObj.minValue,"priceeeeee")
            // console.log(33333)
            // }
            
        if(filterObj?.sorting?.value){
            console.log(33333)
            productData= productData.filter((el,index)=>(
                el?.additioal === filterObj?.sorting?.value
            ))
        }
       

        setFilteredFruits(productData)
    }

    const handleSelect=(e)=>{
        setFilterObj({...filterObj, sorting: e})
    }

    const handleChange = (e)=>{
        setFilterObj({...filterObj, [e.target.name]: e.target.value})    
        
    }

    useEffect(()=>{
      handleData()
    }, [filterObj])

    useEffect(() => {
        handleData()
    }, [fruit])

  return (
    <>
    {/* page header strat */}
    <div className='container-fluid page_header py-5 text-center'>
        <h1 className='text-white fs_28'>shop</h1>
        <p className='mb-0 text-white'>Home/page</p>

    </div>
     {/*page header end  */}
     {/* fruit shop start */}
     <div className='conatiner-fluid fruit_shop py-5'>
        <div className='container py-5'>
            <h1 className='mb-4'>Fresh fruits shop</h1>
            <div className='row'>
                <div className='col-lg-12'>
                  <div className='row g-4 justify-content-between'>
                    <div className='col-lg-3'>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control p-3 rounded_start_10" placeholder="Search, Name, Color, Type" name="search" onChange={(e)=>handleChange(e)} />
                            <span class="input-group-text p-3 rounded_end_10" ><i class="fa-solid fa-magnifying-glass text_dark fw_900"></i></span>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='rounded bg_light d-flex justify-content-between ps-3 py-3 mb-4'>
                            <lable>Default Sorting:</lable>
                            {/* <select class="form-select w-auto border-0 sorting">
                                <option selected>Nothing</option>
                                <option value="fresh">Fresh</option>
                                <option value="organic">Organic</option>
                                <option value="3">Fantastic</option>
                            </select> */}
                            <Select
                                defaultValue={filterObj?.sorting}
                                onChange={(e)=>handleSelect(e)}
                                options={options}
                            />
                            

                        </div>

                    </div>
                  </div>
                  <div className='row g-4'>
                    <div className='col-3 shop_sidebar'>
                        <div className='row g-4'>
                            <div className='col-lg-12'>
                                <div className='mb-3'>
                                    <h4>Categories</h4>
                                    <ul className='fruit_categorie ps-0'>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to=""  onClick={(e)=>setFilterObj({...filterObj, type:""})}>
                                                <i class="fa-solid fa-apple-whole me-2"></i>
                                                All
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="" onClick={(e)=>setFilterObj({...filterObj, type:"fruit"})}>
                                                <i class="fa-solid fa-apple-whole me-2"></i>
                                                Fruits
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="" onClick={(e)=>setFilterObj({...filterObj, type:"vegetable"})}>
                                                <i class="fa-solid fa-apple-whole me-2"></i>
                                                Vegetables
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mb-3'>
                                    <h4 className='mb-2'>Price</h4>
                                    {/* <p>Min Price</p>
                                    <input type="range" class="form-range" id="customRange2" value={filterObj?.minRange} name="minRange" onChange={(e)=>handleChange(e)}></input>
                                    <p>{filterObj.minRange}</p>
                                    <p>Max Price</p>
                                    <input type="range" class="form-range" id="customRange2" value={filterObj?.maxRange} name="maxRange" onChange={(e)=>handleChange(e)}></input>
                                    <p>{filterObj?.maxRange}</p> */}

                                    <MultiRangeSlider
                                        min={0}
                                        max={100}
                                        step={5}
                                        minValue={filterObj?.minValue}
                                        maxValue={filterObj?.maxValue}
                                        {...rangeOptions}
                                        className='multiSlider px-0'
                                        onChange={(e) => {
                                            handleInput(e);
                                        }}
                                    />
                                    <div className='d-flex justify-content-between mx-0 px-3'>
                                        <p>{filterObj.minValue}</p>
                                        <p>{filterObj.maxValue}</p>

                                    </div>
                                    
                                  
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mb-3'>
                                    <h4>Additional</h4>
                                    <div className='mb-2'>
                                        <input class="form-check-input rounded-circle me-2" type="radio"  name="organic" checked={filterObj.additioal === "organic"} onClick={(e)=>setFilterObj({...filterObj, additioal:"organic"})}  />
                                        
                                        <label class="form-check-label"  >
                                            Organic
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input class="form-check-input rounded-circle me-2" type="radio" name="fresh" checked={filterObj.additioal === "fresh"}  onClick={(e)=>setFilterObj({...filterObj, additioal:"fresh"})} />
                                        <label class="form-check-label">
                                            Fresh
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input class="form-check-input rounded-circle me-2" type="radio" value="" name='' checked={filterObj.additioal === ""} onClick={(e)=>setFilterObj({...filterObj, additioal:""})} />
                                        <label class="form-check-label">
                                            All
                                        </label>
                                    </div>
                                    
                                    {/* <div className='mb-2'>
                                        <input class="form-check-input rounded-circle me-2" type="checkbox" value="" />
                                        <label class="form-check-label">
                                            Discount
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input class="form-check-input rounded-circle me-2" type="checkbox" value="" />
                                        <label class="form-check-label">
                                            Expired
                                        </label>
                                    </div> */}


                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <h4 className='mb-3'>Featured products</h4>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <div className='feature_img me-4'>
                                        <img src={featur1} className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h6 className='mb-2'>Big Banana</h6>
                                        <div className="d-flex mb-2">
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <h5 className='fw_bold me-2'>2.99 $</h5>
                                            <h5 className='text-danger text-decoration-line-through'>4.11 $</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-start align-items-center'>
                                    <div className='feature_img me-4'>
                                        <img src={featur2} className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h6 className='mb-2'>Big Banana</h6>
                                        <div className="d-flex mb-2">
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <h5 className='fw_bold me-2'>2.99 $</h5>
                                            <h5 className='text-danger text-decoration-line-through'>4.11 $</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-start align-items-center'>
                                    <div className='feature_img me-4'>
                                        <img src={featur3} className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h6 className='mb-2'>Big Banana</h6>
                                        <div className="d-flex mb-2">
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star text_secondary"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='d-flex mb-2'>
                                            <h5 className='fw_bold me-2'>2.99 $</h5>
                                            <h5 className='text-danger text-decoration-line-through'>4.11 $</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center my-4'>
                                    <a href='#' className='btn rounded-pill border border_secondary text_primary w-100 px-4 py-3'>Vew More</a>

                                </div>
                            </div>

                            <div className='col-lg-12'>
                                <div className='position-relative'>
                                    <img src={bannerFruit} className='img-fluid w-100 border_rounded_10'/>
                                    <div className='bannerFruit_text position-absolute'>
                                        <h3 className='fw_bold text_secondary'>Fresh <br/> Fruits <br/> Banner</h3>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-9'>
                        <div className='row g-4'>
                          {
                                filteredFruits.map((fruit, index) => (
                                    <div className="col-4 text-center" key={index}>
                                        <div className="card_fruit_item position-relative">
                                            <div className="fruit_img border_rounded_top_10 overflow-hidden">
                                            <img
                                                src={fruit.image}
                                                className="img-fluid border_rounded_top_10"
                                            />
                                            </div>
                                            <div className="border border_secondary border-top-0 border_rounded_bottom_10 p-4">
                                            <h4>{fruit.name}</h4>
                                            <p>{fruit.description}</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="text-gray-600 fw_600 fs_19 mb-0">
                                                {fruit.price}$
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
                                            <div className='rounded-pill border_rounded_top_10 bg_secondary text_white position-absolute top-0 end-0 px-3 py-4'>
                                                <h5 className='mb-0 text_white text-capitalize'>{fruit.additioal}</h5>

                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                            

                           

                           
                        </div>
                        <div className='row g-4'>
                            <div className='col-12'>
                                <div className='pegination d-flex justify-content-center align-items-center mt-5'>
                                    <a href='#' className='border border_secondary border_rounded_10'><i class="fa-solid fa-angles-left fa-2xs"></i></a>
                                    <a href='#' className='border border_secondary border_rounded_10 active'>1</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>2</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>3</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>4</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>5</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>6</a>
                                    <a href='#' className='border border_secondary border_rounded_10'><i class="fa-solid fa-angles-right fa-2xs"></i></a>


                                </div>

                            </div>
   

                        </div>

                    </div>

                  </div>


                </div>

            </div>

        </div>

     </div>
     {/* fruit shop end */}
    </>
  )
}

export default VegetableShop
