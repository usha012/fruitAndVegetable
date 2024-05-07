// import configureStore from '@reduxjs/toolkit'
import {configureStore, combineReducers } from '@reduxjs/toolkit'
import fruitSlice from './fruitsSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    fruits: fruitSlice.reducer,
    cartItems: cartSlice
})

const store = configureStore ({
    reducer:rootReducer
})
export default store 