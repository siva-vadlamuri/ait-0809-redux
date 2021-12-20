import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import Products from "../Products/Products";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        {/* Dynamic Routing */}
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Router;
