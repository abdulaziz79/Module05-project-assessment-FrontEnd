import Styles from "./Cart.module.css"
import React from 'react'
import { Link } from "react-router-dom"

const Cart = ({item}) => {
  return (
    <div className={Styles.container}>
        <Link className={Styles.linkTo} to="/productDetails"  state={item}>
        <div>

          <img className={Styles.image} src={`http://localhost:5000/${item.image}`} alt="" />
        </div>
        <div className={Styles.text}>
          <p className={Styles.title}>{item.title}</p>
        </div>
        </Link>
        <div className={Styles.bottomSection}>
        <h2 className={Styles.price}>${item.price}</h2>
        <button className={item.stock>0?Styles.btn:Styles.btnSold} >Add to cart</button>

      </div>
    </div>
  )
}

export default Cart
