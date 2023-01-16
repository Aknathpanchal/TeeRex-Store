import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div>
          <p>TeeRex Store</p>
        </div>
        <div>
          <div>
            <NavLink to="/">Products</NavLink>
          </div>
          <div>
            <NavLink to="/cart">
              <img
                style={{ width: "28px", marginTop: "4px" }}
                src="https://www.freeiconspng.com/uploads/basket-cart-icon-27.png"
                alt="basket cart icon"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
