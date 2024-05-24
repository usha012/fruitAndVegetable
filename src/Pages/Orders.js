import React, { useState } from 'react'
import { addOrder } from '../Redux/ordersSlice'
import { useSelector} from 'react-redux'
import ReactPaginate from 'react-paginate';


const Orders = () => {
    const orderDetail = useSelector(state => state.orders)
    console.log(orderDetail, "ghhhhhhhhhhhh")

        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 5
      
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = orderDetail.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(orderDetail.length / itemsPerPage);
      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % orderDetail.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        }

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
                <div className='row justify-content-center'>
                    <div className='col-10'>

                    {/* {currentItems &&
                    currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                    ))} */}
                        {
                            currentItems &&
                            currentItems.map((el,i)=>(
                                <div class="accordion accordion-flush border-bottom mb-4" id="accordionFlushExample">
                                    <div class="accordion-item ">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        
                                                <div className='col-3'>
                                                    <p className='mb-2'>Id</p>
                                                    <p className='mb-2'>{el?.id}</p>
                
                                                </div>
                                                <div className='col-3'>
                                                    <p className='mb-2'>No. of item</p>
                                                    <p className='mb-2'>{el?.totalItem}</p>
                
                                                </div>
                                                <div className='col-4'>
                                                    <p className='mb-2'>Total Amount</p>
                                                    <p className='mb-2'>{el?.total}</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p className='mb-2'>Date</p>
                                                    <p className='mb-2'>{el?.date}</p>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <table class="table order_list">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Item Qty</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Total Price</th>
                                                        </tr>
                                                    </thead>
                                                   
                                                    <tbody>

                                                    {
                                                        el?.orderItem?.map((el,i)=>(
                                                        <tr>
                                                            <th scope="row">{i}</th>
                                                            <td>{el?.name}</td>
                                                            <td>{el?.itemQty}</td>
                                                            <td>{el?.price}</td>
                                                            <td>{Number(el?.price)* Number(el?.itemQty)}</td>
                                                        </tr>
                                                        ))
                                                    }
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                        
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel={<i className="fa-solid fa-angles-right fa-2xs"></i>}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel={<i className="fa-solid fa-angles-left fa-2xs"></i>}
                                    renderOnZeroPageCount={null}

                                    // breakClassName={'page-item'}
                                    // breakLinkClassName={'page-link'}
                                    containerClassName={'pegination d-flex justify-content-center align-items-center mt-5'}
                                    pageClassName={' border border_secondary border_rounded_10'}
                                    // pageLinkClassName={'page-link'}
                                    previousClassName={' border border_secondary border_rounded_10'}
                                    // previousLinkClassName={'page-link'}
                                    nextClassName={' border border_secondary border_rounded_10'}
                                    // nextLinkClassName={'page-link'}
                                    // activeClassName={'active'}
                                />


                       
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Orders
