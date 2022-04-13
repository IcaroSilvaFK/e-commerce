import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart.reducer";
export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
