import React, { useEffect } from 'react'
import vegetableItem from '../Assets/Images/vegetable-item-3.png'
import { addToCart, removeItem, deleteCartItem, emptyCart } from '../Redux/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from '../Redux/ordersSlice'
import { Link } from 'react-router-dom'





const Cart = () => {
    const cart = useSelector(state => state.cartItems)
    console.log( useSelector(state => state.cartItems),"cartttttt4444444444 ")
    const dispatch = useDispatch()

    const totalPrice = cart?.reduce((acuu, curr)=> acuu + Number(curr.price) * Number(curr.itemQty),0 )
    console.log(totalPrice, "priceeeee")
    console.log(cart, "art5555555")

    const handleAddToOrders = ()=>{
        dispatch(addOrder(cart))
        dispatch(emptyCart())

    }

 
// useEffect(()=>{
    
// })
   
  return (
    <>
    {/* page header strat */}
    <div className='container-fluid page_header py-5 text-center'>
        <h1 className='text-white fs_28'>Cart</h1>
        <p className='mb-0 text-white'>Cart/page</p>
    </div>

    {/* product table */}
    <div className='container-fluid py-5'>
        <div className='container py-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className='text_dark'>Products</th>
                        <th scope="col" className='text_dark'>Name</th>
                        <th scope="col" className='text_dark'>Price</th>
                        <th scope="col" className='text_dark'>Quantity</th>
                        <th scope="col" className='text_dark'>Total</th>
                        <th scope="col" className='text_dark'>Handle</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map((el,i)=>( 
                        <tr>
                            <th scope="row">
                                <div className='image_outer_sm_cover rounded-circle overflow-hidden'>
                                    <img src={el?.image}/>
                                </div>
                            </th>
                            
                            <td>
                                <p className='mb-0 mt-4'>{el.name}</p>
                            </td>
                            <td>
                                <p className='mb-0 mt-4'>{`$${el?.price}`}</p>
                            </td>
                            <td>
                                <div className='input-group quantity mt-4 '>
                                    <button className='btn btn_sm rounded-circle border bg-light text_dark fw_700' onClick={()=> dispatch(removeItem(el?.id))}><i className="fa-solid fa-minus"></i></button>
                                    <input type='text' className='form-control form-control-sm text-center border-0' value={el?.itemQty}/>
                                    <button className='btn btn_sm rounded-circle border bg-light text_dark fw_700' onClick={()=> dispatch(addToCart(el)) }><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </td>
                            <td>
                                <p className='mb-0 mt-4'>{el?.itemQty}</p>
                            </td>
                            <td>
                                <button className='btn rounded-circle border bg-light mt-4' onClick={()=> dispatch(deleteCartItem(el?.id))}>
                                    <i class="fa-solid fa-xmark text-danger fa-lg" ></i>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                    

                        
                      
                </tbody>
            </table>
            <div className='mt-5 row gx-4 justify-content-start'>
                <div className='col-3'>
                    <input type="text" className='form-control border-0 border-bottom rounded-pill py-3 mb-4' placeholder='Coupon'/>
                </div>
                <div className='col-4'>
                    <button className='btn border_secondary rounded-pill text_primary px-4 py-3 ' type='button'> Apply Coupon </button>
                </div>
            </div>
            <div className='row g-4 justify-content-end'>
                <div className='col-4'>
                    <div className='bg_light rounded'>
                      

                                <div className='p-4'>
                                    <h1 className='mb-4 fw_700'>Cart <span className='fw_normal'>Total</span></h1>
                                    <div className='d-flex justify-content-between mb-4'>
                                        <h5 className='mb-0 me-4'>Subtotal:</h5>
                                        <p className='mb-0'>{totalPrice}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='mb-0 me-4'>Shipping</h5>
                                        <p className='mb-0'>Flat rate: $3.00</p>
                                    </div>
                                    <p className='text-end'>Shipping to India.</p>
                                </div>


                                <div className='border-top border-bottom py-4 mb-4 d-flex justify-content-between'>
                                    <h5 className='mb-0 ps-4 me-4'>Total</h5>
                                    <p className='mb-0 pe-4'>{`$${totalPrice}`}</p>
                                </div>
                        
                      <Link to="/Orders"> 
                      <button className='btn border_secondary rounded-pill px-4 py-3 text_primary text-uppercase mb-4 ms-4' type='button' onClick={()=>handleAddToOrders()}>Proceed Checkout</button>
                      </Link>            
                    </div>

                </div>

            </div>




        </div>

    </div>

      
    </>
  )
}

export default Cart
