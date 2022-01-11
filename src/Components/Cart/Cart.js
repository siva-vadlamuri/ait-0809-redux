import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const [total, setTotal] = useState(0);
  const cartData = useSelector((state) => state.productsData.cartData);
  console.log(cartData);

  const getTheTotal = () => {
    const grandTotal = cartData.reduce(
      (total, currentValue) => total + currentValue.price,
      0
    );
    // console.log(grandTotal);
    setTotal(grandTotal);
  };
  useEffect(() => {
    getTheTotal();
  }, [cartData]);
  return (
    <div>
      <div className="container mt-3 border border-dark">
        {cartData && cartData.length > 0 ? (
          <div className="mt-4">
            <p>Total: {total}</p>
          </div>
        ) : null}

        {cartData && cartData.length > 0 ? (
          cartData.map((product) => (
            <div>
              <div className="row mt-3">
                {/* 4 and 8 */}
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    height={200}
                  />
                </div>
                <div className="col-md-8">
                  <div className="mt-3">
                    <div className="mt-2">
                      <h2>Title: {product.title}</h2>
                    </div>
                    <div className="mt-4">
                      <h3>Category:{product.category}</h3>
                    </div>
                    <div className="mt-4">
                      <p>Description: {product.description}</p>
                    </div>
                    <div className="mt-4">
                      <p>
                        <strong>Price</strong> $:{product.price}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container mt-3">
            <p>No Products Are Added</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
