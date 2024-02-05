import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Styles from "./Product.module.css"
import Cart from '../../Components/Cart/Cart'

const Product = () => {
    const [data, setData]= useState("")
    const fetchData= async()=>{
        try {
            const respone= await axios.get("http://localhost:5000/product/readAll")
            if(respone){
                setData(respone.data)
                console.log(respone.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className={Styles.product}>
        {/* <h1>Products</h1> */}
        {data && data.map((item)=>(
            <Cart key={item.id} item={item  }/>
        ))}
      
    </div>
  )
}

export default Product
