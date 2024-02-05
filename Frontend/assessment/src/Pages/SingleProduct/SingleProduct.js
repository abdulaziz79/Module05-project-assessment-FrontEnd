import React from 'react'
import { useLocation } from "react-router-dom";
import styles from "./SingleProduct.module.css"


const SingleProduct = () => {
    const location = useLocation();
    const myItem = location.state && location.state;

    return (
      <main className={styles.main}>
        <div>
           <img src={`http://localhost:5000/${myItem.image}`}></img> 
        </div>
        <div>
          <h1> {myItem.title}</h1> 
          {myItem.description}
          <br />
          $ {myItem.price}
        </div>
      
      </main>
    );
  };

export default SingleProduct
