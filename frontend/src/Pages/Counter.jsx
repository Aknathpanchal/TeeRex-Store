import React, { useState } from "react";
import Styles from "./ProductPage.module.css"

const Counter = ({qty,elem}) => {
  const [count, setCount] = useState(1);
  // const [cart, setCart] = useState([])

  const handleAdd=()=>{
    if(count>=qty-1){
        alert("No Quantity")
    }else{
      setCount(prev=> prev + 1)
    }
  }


  return (
    <>
   {!count < 1 ? <div className={Styles.counter} style={{display:"flex",justifyContent:"center",gap:"20px"}}>
      <button disabled={count<1} onClick={()=>setCount((prev)=>prev-1)}>-</button>
      <p>{count}</p>
      <button disabled={count===qty}  onClick={handleAdd}>+</button>
    </div>:<div className={Styles.AddtoCart}><button >Add To Cart</button></div>}
    </>
  );
};

export default Counter;
