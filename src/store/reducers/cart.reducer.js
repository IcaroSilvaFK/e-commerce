import {
  addCart,
  removeCart,
  addNewQuantity,
  increaseQuantity,
  decreaseQuantity,
} from "../actions/cart.actions";
import { createReducer, current } from "@reduxjs/toolkit";

const INITIAL_STATE_CART = {
  cart: [],
};

export const cartReducer = createReducer(INITIAL_STATE_CART, (builder) => {
  builder.addCase(addCart, (state, action) => {
    const { product } = action.payload;
    state.cart.push({
      ...product,
    });
  });
  builder.addCase(addNewQuantity, (state, action) => {
    const { cart } = current(state);
    const newQuanity = cart.map((element) =>
      element.id === action.payload
        ? {
            ...element,
            quantity: element.quantity + 1,
          }
        : element
    );
    state.cart = newQuanity;
  });
  builder.addCase(removeCart, (state, action) => {
    const { cart } = current(state);

    const newProducts = cart.filter((element) => element.id !== action.payload);
    state.cart = newProducts;
  });
  builder.addCase(decreaseQuantity, (state, action) => {
    const { cart } = current(state);

    const newQuantity = cart.map((element) =>
      element.id === action.payload
        ? {
            ...element,
            quantity: element.quantity - 1,
          }
        : element
    );

    state.cart = newQuantity;
  });
});
