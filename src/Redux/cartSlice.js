import {createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name :'cart',
    initialState: [],
    reducers:{
        addToCart(state,action){
            const item = action.payload
            const cart = state
            const foundItem = cart.find((el) => el.id === item.id)
            const itemIndex = cart?.findIndex((el) => el.id === item.id )

            if(foundItem){
                const updateItem = cart.toSpliced(itemIndex, 1, {...foundItem, itemQty: foundItem.itemQty + 1})
                console.log(updateItem, "updateddddddddddd222222222")
                return updateItem
            }
            else{
                const updateCart = [...cart, {...item, itemQty: 1}]
                return updateCart
            }
        

        },
        removeItem(state, action){
            const id = action.payload
            const cart = state
            const foundItem = cart.find((el,i)=> el.id === id)
            const foundIndex = cart.findIndex((el,i)=> el.id === id)

            if(foundItem.itemQty <= 1){
              const removeItemQty = cart.toSpliced(foundIndex, 1)
              return removeItemQty
            }
            else{
                const removeItemQty = cart.toSpliced(foundIndex, 1, {...foundItem, itemQty: foundItem.itemQty - 1})
                return removeItemQty
            }

        },
        deleteCartItem(state, action){
            const itemId = action.payload
            const cart = state
            const foundIndex = cart.findIndex((el,i)=> el.id === itemId)
            const deleteItem = cart.toSpliced(foundIndex, 1)

            // console.log(item, "deleteCartttttttttt")

            return deleteItem

        }
    }
})
export const {addToCart, removeItem, deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer;