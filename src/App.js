
import './App.css';
import "./Assets/Sass/style.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Footer from './Components/Footer';
import VegetableShop from './Pages/VegetableShop';
import axios from 'axios';
import { addfruits } from './Redux/fruitsSlice'

import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import ProductDetail from './Pages/ProductDetail';
// import { addFeatureProduct } from './Redux/productSlice';
import Cart from './Pages/Cart';

function App() {
  const dispatch = useDispatch()
  const fruitsData = async()=>{
    const response = await axios.get('http://localhost:8000/all')
    dispatch(addfruits(response.data))
    // dispatch(addFeatureProduct(response.data))

  }

  // const VegData = async()=>{
  //   const response = await axios.get("http://localhost:8000/vegetables")
  //   dispatch(addFeatureProduct(response.data))
  // }


  useEffect(()=>{
    fruitsData()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/vegetableshop' element={<VegetableShop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
