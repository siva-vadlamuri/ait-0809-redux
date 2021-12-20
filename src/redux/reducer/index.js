import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

// We need to combine all the reducers in a single Place
export const reducer = combineReducers({
  productsData: ProductReducer,
});
