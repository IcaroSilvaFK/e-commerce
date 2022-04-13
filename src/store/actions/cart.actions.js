import { createAction } from "@reduxjs/toolkit";

export const addCart = createAction("ADD_TO_CART");
export const removeCart = createAction("REMOVE_TO_cART");
export const addNewQuantity = createAction("ADD_NEW_QUANTITY");
export const increaseQuantity = createAction("INCREASE_QUANTITY");
export const decreaseQuantity = createAction("DECREASE_QUANTITY");
