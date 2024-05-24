import {createSlice} from "@reduxjs/toolkit"
const ordersSlice = createSlice({
    name :'orders',
    initialState: [],
    reducers:{
     addOrder(state, action){
        const orderItem = action.payload
        const ordersList = state
        const totalPrice = orderItem.reduce((accu, curr)=> accu + Number(curr?.price) * Number(curr?.itemQty), 0)
        const today= new Date()
        const day = today.getDate()
        const month= today.getMonth()
        const year= today.getFullYear()
        const date = `${day}/${month}/${year}`
        console.log(date, "dateeeeee")
        const totalOrder= [{ orderItem, id: Number(new Date()), total: totalPrice, totalItem:orderItem.length, date},...ordersList ]
        console.log(ordersList,"addorders")
        return totalOrder

     }
    }
})
export const {addOrder} = ordersSlice.actions;
export default ordersSlice.reducer;