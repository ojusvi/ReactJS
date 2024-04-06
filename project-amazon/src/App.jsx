import { useState } from 'react'
import Nav from './components/Nav'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import ProductCard from './components/ProductCard';
import Products from './pages/Products'
import ProductDetails from './pages/productDetail';
import { SignIn } from './pages/signIn';

function App() {

  return (
    <div className='min-h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="productDetail/:id" element={<ProductDetails />} />
        </Route>
        <Route path='signin' element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
