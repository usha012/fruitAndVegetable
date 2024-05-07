import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import featur1 from "../Assets/Images/featur-1.jpg";
import featur2 from "../Assets/Images/featur-2.jpg";
import featur3 from "../Assets/Images/featur-3.jpg";
import bannerFruit from "../Assets/Images/banner-fruits.jpg";
import fruitItem1 from "../Assets/Images/fruite-item-1.jpg";
import fruitItem2 from "../Assets/Images/fruite-item-2.jpg";
import fruitItem3 from "../Assets/Images/fruite-item-3.jpg";
import fruitItem4 from "../Assets/Images/fruite-item-4.jpg";
import fruitItem5 from "../Assets/Images/fruite-item-5.jpg";
const Shop = () => {

    const [fruits, setFruits] = useState([]);
    const [filterFruits, setFilterFruits] =  useState([]);
    const [dataFilter, setDataFilter] = useState({range:"0"})

    const fruitsData = async()=>{
            // const response = await fetch("http://localhost:8000/fruits");
            // const fruitData = await response.json();
            // setFruits(fruitData);
            // console.log(fruitData, "fruitttttttttttttt")

            const response = await axios.get("http://localhost:8000/all");
            setFruits(response.data)
            setFilterFruits(response.data)

    }


    const handleSearch = ()=>{

        let filteredData = fruits
        console.log("In search function,");

        if(dataFilter?.search){
            console.log("In search");
            filteredData = filteredData.filter((el, index)=>(
                el?.name?.toLowerCase().includes(dataFilter?.search?.toLowerCase()) ||
                el?.type?.toLowerCase().includes(dataFilter?.search?.toLowerCase()) ||
                el?.color?.toLowerCase().includes(dataFilter?.search?.toLowerCase()) 
            ))
        }
            
        if(Number(dataFilter?.range) > 0){
            console.log("In range");
            filteredData = filteredData.filter(el =>  +(el?.price) <= +(dataFilter?.range))
        }
        
        if(dataFilter?.type){
            console.log("In type");
           filteredData = filteredData.filter((el)=>(el?.type) === dataFilter.type)

        }

        if(dataFilter?.name){
            filteredData = filteredData.filter((el)=>(el.additioal) === dataFilter.name )
        }

        setFilterFruits(filteredData)
    }




    // const onKeyDown =(e)=>{         
    //     setSearch(e.target.value)
    //     if(e.keyCode === 8){
    //         setTimeout(()=>(
    //             handleSearch()

    //         ), 100)
    //     }
    // }

    const handleFilterData =(e)=>{
        setDataFilter({...dataFilter, [e.target.name]: e.target.value})
    }
  


    useEffect(()=>{
        fruitsData()
    },[]) 

    useEffect(()=>{
        handleSearch()
    }, [dataFilter])

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
                        <div className="input-group mb-3">
                            <input type="text" className="form-control p-3 rounded_start_10" value={dataFilter?.search} placeholder="Keywords" name="search" onChange={(e)=>handleFilterData(e)} />
                            <span className="input-group-text p-3 rounded_end_10" onClick={()=>handleSearch()}><i className="fa-solid fa-magnifying-glass text_dark fw_900"></i></span>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='rounded bg_light d-flex justify-content-between ps-3 py-3 mb-4'>
                            <lable>Default Sorting:</lable>
                            <select className="form-select w-auto border-0 sorting">
                                <option selected>Nothing</option>
                                <option value="1">Popularity</option>
                                <option value="2">Organic</option>
                                <option value="3">Fantastic</option>
                            </select>

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
                                                <Link to="" onClick={()=>setDataFilter({...dataFilter, type:""})}>
                                                <i className="fa-solid fa-apple-whole me-2"></i>
                                                All
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="" onClick={()=>setDataFilter({...dataFilter, type: "fruit"})} name="type">
                                                <i className="fa-solid fa-apple-whole me-2"></i>
                                                Fruits
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="" onClick={()=>setDataFilter({...dataFilter, type: "vegetable"})} name="type">
                                                <i className="fa-solid fa-apple-whole me-2"></i>
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
                                    <input type="range" className="form-range" value={dataFilter?.range} min="0" max="100" name="range" onChange={(e)=>handleFilterData(e)} id="customRange2"></input>
                                    <p>{JSON.stringify(dataFilter)}</p>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mb-3'>
                                    <h4>Additional</h4>
                                    <div className='mb-2'>
                                        <input className="form-check-input rounded-circle me-2" type="radio" checked={dataFilter?.name === "organic"} value="" name="organic" onClick={()=>setDataFilter({...dataFilter, name:"organic"})} />
                                        <label className="form-check-label">
                                            Organic
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input className="form-check-input rounded-circle me-2" type="radio" checked={dataFilter?.name === "fresh"} value="" name="fresh" onClick={()=>setDataFilter({...dataFilter, name:"fresh"})} />
                                        <label className="form-check-label">
                                            Fresh
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input className="form-check-input rounded-circle me-2" type="radio" value=""  checked={dataFilter?.name === ""}  name="" onClick={()=>setDataFilter({...dataFilter, name:""})} />
                                        <label className="form-check-label">
                                            All
                                        </label>
                                    </div>
                                    {/* <div className='mb-2'>
                                        <input className="form-check-input rounded-circle me-2" type="checkbox" value="" />
                                        <label className="form-check-label">
                                            Discount
                                        </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input className="form-check-input rounded-circle me-2" type="checkbox" value="" />
                                        <label className="form-check-label">
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
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star"></i>
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
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star"></i>
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
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star text_secondary"></i>
                                        <i className="fa-solid fa-star"></i>
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
                                filterFruits.length === 0
                                ?
                                <div className='d-flex justify-content-center align-items-center'>
                                <p className='mb-0 text_primary'>No Data Found</p>
                                </div>
                                :
                                filterFruits.map((fruit, index) => (
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
                                    <a href='#' className='border border_secondary border_rounded_10'><i className="fa-solid fa-angles-left fa-2xs"></i></a>
                                    <a href='#' className='border border_secondary border_rounded_10 active'>1</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>2</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>3</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>4</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>5</a>
                                    <a href='#' className='border border_secondary border_rounded_10'>6</a>
                                    <a href='#' className='border border_secondary border_rounded_10'><i className="fa-solid fa-angles-right fa-2xs"></i></a>


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

export default Shop
