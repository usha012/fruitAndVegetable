// import configureStore from '@reduxjs/toolkit'
import {configureStore, combineReducers } from '@reduxjs/toolkit'
import fruitSlice from './fruitsSlice'

const rootReducer = combineReducers({
    fruits: fruitSlice.reducer
})

const store = configureStore ({
    reducer:rootReducer
})
export default store 