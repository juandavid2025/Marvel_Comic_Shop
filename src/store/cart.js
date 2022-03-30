import { createSlice } from "@reduxjs/toolkit";

export const initialState = { cart: [], cartAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const comicIndexInCart = state.cart.findIndex(
        (comic) => comic.id === action.payload.id
      );

      if (comicIndexInCart === -1) {
        const toAddComic = { ...action.payload };
        toAddComic.amount = 1;
        state.cartAmount++;
        state.cart.push(toAddComic);
      } else {
        const comicFound = state.cart[comicIndexInCart];
        state.cartAmount++;
        comicFound.amount++;
      }
    },
    removeToCart(state, action) {
      const comicIndexInCart = state.cart.findIndex(
        (comic) => comic.id === action.payload.id
      );

      if (comicIndexInCart !== -1) {
        const cartComic = state.cart[comicIndexInCart];

        if (cartComic.amount > 1) {
          state.cartAmount--;
          cartComic.amount--;
        } else {
          state.cartAmount--;
          state.cart.splice(comicIndexInCart, 1);
          console.log(state.cart[0]);
        }
      } else {
        console.log("Sorry 🎅");
      }
    },
    setCart(state, action) {
      state.cart = action.payload;
      state.cartAmount = action.payload.reduce(
        (total, shopItem) => total + shopItem.amount,
        0
      );
    },
  },
});

export const addComicToCart = (comic) => {
  return (dispatch) => {
    dispatch(cartActions.addToCart(comic));
  };
};

export const subtractComicFromCart = (comic) => {
  return (dispatch) => {
    dispatch(cartActions.removeToCart(comic));
  };
};

export const setComicSavedCart = (cartComicArray) => {
  return (dispatch) => {
    dispatch(cartActions.setCart(cartComicArray));
  };
};

//-----------------------------------------
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
