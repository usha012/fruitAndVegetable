// import configureStore from '@reduxjs/toolkit'
import {configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import fruitSlice from './fruitsSlice'
import cartSlice from './cartSlice'
import ordersSlice from './ordersSlice'

const rootReducer = combineReducers({
    fruits: fruitSlice.reducer,
    cartItems: cartSlice,
    orders: ordersSlice
})

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)  

const store = configureStore ({
    reducer:persistedReducer
})

const persistor = persistStore(store);

export { store, persistor };