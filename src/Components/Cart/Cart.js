import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((state) => state.productsData.cartData);
  console.log(cartData);
  return (
    <div>
      <div className="container">
        {cartData &&
          cartData.length > 0 &&
          cartData.map((product) => <h2>{product.title}</h2>)}
      </div>
    </div>
  );
}

export default Cart;
