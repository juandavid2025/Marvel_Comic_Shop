import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./index";

import { Comic } from "../models/comic";
import { CartComic } from "../models/cartComic";

const initialState: { cart: CartComic[]; cartAmount: number } = {
  cart: [],
  cartAmount: 0
};

// STATE -> { cart: {comic, comicAmount}[], cartAmount }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: { payload: Comic; type: string }) {
      const comicIndexInCart = state.cart.findIndex(
        cartComic => cartComic.comic.id === action.payload.id
      );

      if (comicIndexInCart === -1) {
        const newCartComic: CartComic = {
          comic: { ...action.payload },
          comicAmount: 1
        };
        state.cartAmount++;
        state.cart.push(newCartComic);
      } else {
        const cartComicFoundInCart = state.cart[comicIndexInCart];
        cartComicFoundInCart.comicAmount++;
        state.cartAmount++;
      }
    },
    removeFromCart(state, action: { payload: number; type: string }) {
      const cartComicIndex = state.cart.findIndex(
        cartComic => cartComic.comic.id === action.payload
      );

      if (cartComicIndex !== -1) {
        const cartComic = state.cart[cartComicIndex];

        if (cartComic.comicAmount > 1) {
          state.cartAmount--;
          cartComic.comicAmount--;
        } else {
          state.cart.splice(cartComicIndex, 1);
          state.cartAmount--;
        }
      }
    },
    setCart(state, action: { payload: CartComic[]; type: string }) {
      state.cart = action.payload;
      state.cartAmount = action.payload.reduce((acc, curr) => {
        return acc + curr.comicAmount;
      }, 0);
    }
  }
});

export const addComicToCart = (comic: Comic) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartActions.addToCart(comic));
  };
};

export const subtractComicFromCart = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartActions.removeFromCart(id));
  };
};

export const setComicSavedCart = (cartComicArray: CartComic[]) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartActions.setCart(cartComicArray));
  };
};

//-----------------------------------------
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
