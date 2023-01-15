import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

export const MainRoutes = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};
