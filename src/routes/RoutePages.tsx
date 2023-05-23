import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import { Register } from "../pages/home/Register"
import { Sell } from "../pages/home/Sell"
import { Stock } from "../pages/home/Stock"

const RoutePages: React.FC = () => {
  return(
    <Routes>
      <Route path='/*' element={<Home/>} />
      <Route path='/cadastro' element={<Register/>} />
      <Route path='/vender' element={<Sell/>} />
      <Route path='/faturamento' element={<Stock/>} />
      <Route path='/estoque' element={<Stock/>} />
    </Routes>
  )
}


export default RoutePages