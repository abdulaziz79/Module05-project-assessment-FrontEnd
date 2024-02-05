import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from '../Pages/Products/Product';
import Login from '../Pages/Login/Login';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';

const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Product />} />
                <Route path='/login' element={<Login />} />
                <Route path='/productDetails' element={<SingleProduct />} />

            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router