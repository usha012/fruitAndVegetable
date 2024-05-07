import React, { useEffect, useState } from 'react'
// import {Link} from "react-router-dom"
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import singleItem from "../Assets/Images/single-item.jpg"
import featur1 from "../Assets/Images/featur-1.jpg";
import featur2 from "../Assets/Images/featur-2.jpg";
import featur3 from "../Assets/Images/featur-3.jpg";
import bannerFruit from "../Assets/Images/banner-fruits.jpg";
import ProductSlider from '../Components/ProductSlider';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem} from '../Redux/cartSlice';


const ProductDetail = () => {
    const [tabContent, setTabContent] = useState("description");
    const [productDetails, setProductDetails] = useState();
    const [checkProduct, setCheckProduct] = useState()
    const params = useParams();
    console.log(params, "pramssssssss")

    // const productData = async()=>{
    //     const response = await axios.get("http://localhost:8000/all");
    //     const filteredData  = response?.data?.filter((data, index)=>data?.id == params?.id)
    //     console.log(filteredData,'99999')
    //     setProductDetails(filteredData)
    // }

    // const allData = useSelector((stateww)=> state.fruits)

    const dispatch = useDispatch()

    const allData = useSelector((state)=> state.fruits )

    const cart = useSelector((state)=> state.cartItems)

    const productData =()=>{
        console.log(allData, "3333777777")
        const filteredData  = allData?.find((data, index)=>data?.id == params?.id)

        console.log(filteredData,'99999')

        

        // console.log(filterSlider,"ssssssss")
        // setSliderData(filterSlider)
    
        // const filterSlider = allData?.filter(()=> )
        // console.log(filterSlider,"gggggggggg")
        setProductDetails(filteredData)
    }

    // const sliderData =()=>{
    //     const filteredData  = allData?.filter((data, index)=>data?.type == )
    //     console.log(productDetails, "slidersss")
    // }





    const handleTab=(tab)=>{
        setTabContent(tab)
    }
    
    console.log(checkProduct, "founditeemmmmmmmmmmmm")
    
    useEffect(()=>{
        const founditem = cart.find((el,i)=> el.id === +params.id)
        setCheckProduct(founditem)
    },[cart, params])

    useEffect(()=>{
       productData()
      
    //    sliderData()
    },[allData])

   

    return (
        <>
        {/* page header strat */}
        <div className='container-fluid page_header py-5 text-center'>
            <h1 className='text-white fs_28'>Product Detail</h1>
            <p className='mb-0 text-white'>Home/productdetail</p>

        </div>
        {/*page header end  */}
        <div className='container-fluid py-5 mt-5'>
            <div className='container py-5'>
                <div className='row g-5'>
                    <div className='col-9'>
                        <div className='row'>
                            {
                                
                                    <>
                                        <div className='col-6'>
                                        <div className='border border_rounded_10'>
                                            {/* <div className='image_outer_md_contain'> */}
                                                <img src={productDetails?.image} className='img-fluid' />
                                            {/* </div> */}
                                        </div>
                                        </div>
                                        <div className='col-6'> 
                                            <h4 className='fw-bold mb-3'>{productDetails?.name}</h4>
                                            <p className='mb-3'>Category : {productDetails?.type}</p>
                                            <h5 className='fw-bold mb-3'>{`$${productDetails?.price}`}</h5>
                                            <div className="d-flex mb-4">
                                                <i className="fa-solid fa-star text_secondary"></i>
                                                <i className="fa-solid fa-star text_secondary"></i>
                                                <i className="fa-solid fa-star text_secondary"></i>
                                                <i className="fa-solid fa-star text_secondary"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
            
                                            <p className='mb-4'>
                                            {productDetails?.description}
                                            </p>
                                            <p className='mb-4'>
                                            {productDetails?.description}
                                            </p>
                                              {
                                                checkProduct
                                                ?
                                                <div className='input-group quantity mb-5'>
                                                    <button className='btn btn_sm rounded-circle border bg-light text_dark fw_700' onClick={()=>dispatch(removeItem(checkProduct?.id))}><i className="fa-solid fa-minus"></i></button>
                                                    <input type='text' className='form-control form-control-sm text-center border-0' value={checkProduct?.itemQty} />
                                                    <button className='btn btn_sm rounded-circle border bg-light text_dark fw_700' onClick={()=>dispatch(addToCart(checkProduct))}><i className="fa-solid fa-plus"></i></button>
                                               </div>
                                               :
                                                <span to="#" className="rounded-pill btn border px-3 border_secondary text_primary"  onClick={()=>(dispatch(addToCart(productDetails)))}>
                                                    <i className="fa fa-shopping-bag me-3 fa-lg text_primary"></i>
                                                    Add to cart
                                                </span>


                                              }
                                       
                                            
                                            
                                        </div>
                                    </>


                            }
                           


                                
                            <div className='col-12 my-5'>
                                <nav className='productDetails_tab'> 
                                    <div className="nav nav-tabs border-0 mb-3" id="nav-tab" role="tablist">
                                        <button className={`nav-link text_primary ${tabContent === "description" ? "active" : ""}`} type="button" onClick={()=>handleTab("description")}>Description</button>
                                        <button className={`nav-link text_primary ${tabContent === "review" ? "active" : ""}`} type="button" onClick={()=>handleTab("review")}>Review</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    {
                                        tabContent === "description" 
                                        ?
                                        <div className={`tab-pane fade ${tabContent === "description" ? "show active" : ""}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <p>
                                            The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. 
                                            Susp endisse ultricies nisi vel quam suscipit 
                                        </p>
                                        <p>
                                            Sabertooth peacock flounder; chain pickerel hatchaetfish, pencilfish snailfish filefish Antarctic 
                                            icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.
                                        </p>
                                        </div>
                                   
                                        :

                                        tabContent === "review" 
                                        ?
                                        <div className={`tab-pane fade ${tabContent === "review" ? "show active" : ""}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <p>
                                             Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. 
                                            Susp endisse ultricies nisi vel quam suscipit 
                                        </p>
                                        <p>
                                            Sabertooth peacock flounder; chain pickerel hatchaetfish, pencilfish snailfish filefish Antarctic 
                                            icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.
                                        </p>
                                        </div>
                                        
                                        :
                                        ""

                                    }
                                </div>
                            </div>
                            <div className='col-12'>
                                <form>
                                    <h4 className='mb-5 fw-bold'>Leave a Reply</h4>
                                    <div className='row mb-3 g-4'>
                                        <div className='col-6'>
                                            <div className='border_rounded_10 border-bottom'>
                                                <input type="email" className="form-control border-0 me-4" placeholder='Your Name'/>
                                            </div> 
                                        </div>
                                           
                                        <div className='col-6'>
                                            <div className='border_rounded_10 border-bottom'>
                                                <input type="email" className="form-control border-0 me-4" placeholder='Your Email'/>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='border_rounded_10 border-bottom my-4'>
                                                <textarea class="form-control border-0" placeholder="Your Review" cols="30" rows="8"></textarea>
                                            </div>

                                        </div>
                                        <div className='col-12'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <p className='mb-0 me-3'>Please rate:</p>
                                                    <div className="d-flex">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                                <a className='btn border border_secondary rounded-pill px-4 py-3 text_primary'> Post Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 shop_sidebar'>
                        <div className='row g-4'>
                            <div className='col-12'>
                                <div className="input-group mb-4">
                                    <input type="text" className="form-control p-3 rounded_start_10" placeholder="keywords" name="search" />
                                    <span className="input-group-text p-3 rounded_end_10" ><i className="fa-solid fa-magnifying-glass text_dark fw_900"></i></span>
                                </div>
                                <div className='mb-4'>
                                    <h4>Categories</h4>
                                    <ul className='fruit_categorie ps-0'>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="" >
                                                <i className="fa-solid fa-apple-whole me-2"></i>
                                                All
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="">
                                                <i className="fa-solid fa-apple-whole me-2"></i>
                                                Fruits
                                                </Link>
                                                <span>(3)</span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className='d-flex justify-content-between fruit_name'>
                                                <Link to="">
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
                </div>
            </div>
        </div>
        <ProductSlider type={productDetails?.type}/>
                        




               

                                






        
        </>
    )
}

export default ProductDetail
