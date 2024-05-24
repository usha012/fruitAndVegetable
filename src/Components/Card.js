import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem} from '../Redux/cartSlice';

const Card = (props) => {
    const { name, price, description, image, id}  = props.data
    const [productDetails, setProductDetails] = useState();
    const [checkProduct, setCheckProduct] = useState()

    const allData = useSelector((state)=> state.fruits )
    const cart = useSelector((state)=> state.cartItems)

    const dispatch = useDispatch()

    const productData =()=>{
        const filteredData  = allData?.find((data, index)=>data?.id == +id)
        setProductDetails(filteredData)
    }

    useEffect(()=>{
        const founditem = cart.find((el,i)=> el.id === +id)
        setCheckProduct(founditem)
    },[cart])

    useEffect(()=>{
        productData()
       
     },[allData])
  return (
    <>
      <div className="card_fruit_item">
        <div className="fruit_img border_rounded_top_10 overflow-hidden">
          <img src={image} className="img-fluid border_rounded_top_10" />
        </div>
        <div className="border border_secondary border-top-0 border_rounded_bottom_10 p-4">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <p className="text-gray-600 fw_600 fs_19 mb-0">{price}</p>
             {
                checkProduct
                ?
                <div className='input-group quantity mb-0'>
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
        </div>
      </div>
    </>
  );
}

export default Card
