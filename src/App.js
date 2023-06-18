import React from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import OrderStatus from './components/OrderStatus';
import Warehouse from './components/Warehouse';


const App = () => {
  return (
   <BrowserRouter>
   {/* <Header/> */}
   <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home" element={<OrderStatus/>}/>
    <Route exact path="/warehouse" element={<Warehouse/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App