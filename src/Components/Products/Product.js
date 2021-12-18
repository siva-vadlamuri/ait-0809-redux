import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getTheSingleProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getTheSingleProduct();
  }, []);

  //   console.log(data);
  return (
    <div>
      <div className="container">
        {Object.keys(product).length > 0 ? (
          <div className="row border border-primary mt-2">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="col-md-6">
              <div className="mt-2">
                <h3 className="p-2">{product.title}</h3>
              </div>
              <div className="product__price">
                <span className="bg-info text-light p-1">
                  Price : $ : {product.price}
                </span>
              </div>
              <div className="product__category mt-2">
                <h2 className="py-3">Category: {product.category}</h2>
              </div>
              <div className="product__description mt-3">
                <p className="p-2">{product.description}</p>
              </div>
              <div className="product__addToCart">
                <button className="btn btn-info px-3 py-2">Add to cart</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Product;
