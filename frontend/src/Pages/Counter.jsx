import React, { useState } from "react";

const Counter = ({ qty, elem }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count >= qty - 1) {
      alert("No Quantity");
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      {!count < 1 ? (
        <div
          className="counter"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <button
            disabled={count < 1}
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <p>{count}</p>
          <button disabled={count === qty} onClick={handleAdd}>
            +
          </button>
        </div>
      ) : (
        <div className="AddtoCart">
          <button>Add To Cart</button>
        </div>
      )}
    </>
  );
};

export default Counter;
