// Actions Creators are functions which will returns a plain Object

import axios from "axios";
import { ActionTypes } from "./ActionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const fetchTheProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response, ActionTypes);
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};
