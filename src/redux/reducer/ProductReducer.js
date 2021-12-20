import { ActionTypes } from "../ActionTypes";

const initalState = {
  products: [],
  cartData: [],
};

export const ProductReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      console.log(action);
      return { ...state, cartData: [...state.cartData, action.payload] };

    default:
      return state;
  }
};
