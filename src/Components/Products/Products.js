import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchTheProducts } from "../../redux/ActionCreators";
import { useDispatch, useSelector } from "react-redux";
// import dotenv from "dotenv";
function Products() {
  const state = useSelector((state) => state.productsData.products);
  console.log(state);
  const [products, setProducts] = useState(state);
  const dispatch = useDispatch();

  //   const getProducts = async () => {
  //     const { data } = await axios.get(process.env.REACT_APP_FAKE_STORE_API);
  //     console.log(process.env.REACT_APP_FAKE_STORE_API);
  //     // console.log(data);
  //     setProducts(data);
  //   };
  useEffect(() => {
    // getProducts();
    // console.log(fetchTheProducts());
    dispatch(fetchTheProducts());
  }, []);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div className="col-md-3">
                <Link to={`/products/${product.id}`}>
                  <div class="card">
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.category}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
