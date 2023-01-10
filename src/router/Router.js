import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import ProtectedRoute from './ProtectedRoute'

import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
import User from '../admin/User'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="home"  element={<Home/>}/>
       
        <Route path='/*' element={<ProtectedRoute/>}>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/all-products' element={<AllProducts/>}/>
        <Route path='dashboard/add-products' element={<AddProducts/>}/>
        <Route path='dashboard/users' element={<User/>}/>
        </Route>


        <Route path="shop" element={<Shop/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="shop/:id" element={<ProductDetails/>}/>
        
    </Routes>
  )
}

export default Router