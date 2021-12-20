// Actions Creators are functions which will returns a plain Object

import { ActionTypes } from "./ActionTypes";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
