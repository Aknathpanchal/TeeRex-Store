import React from "react";
import Styles from "./ProductPage.module.css"
import { useState } from "react";
import Counter from "./Counter";


export const ProductPage = ({elem, qty,handleAddToCart}) => {
    const [show ,setShow] = useState(true);

   const handleAddTo=()=>{
    setShow(!show)
    handleAddToCart(elem)
   }



  return (
    <div className="products_data">
    <div className={Styles.product} key={elem.id}>
      <img src={elem.imageURL} alt={elem.imageURL} />
      <h4>{elem.name}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "-20px",
          marginBottom: "-5px",
        }}
      >
        <h4>{elem.gender}</h4>
        <h4>Rs. {elem.price}</h4>
      </div>
      <div className={Styles.AddtoCart}> 
        {show ? <button onClick={handleAddTo}>Add to Cart</button>:
        <Counter qty={qty} elem={elem} />}
      </div>
      
      
    </div>
    </div>
  );
};
