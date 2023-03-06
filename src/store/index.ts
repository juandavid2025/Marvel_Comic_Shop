import { configureStore } from "@reduxjs/toolkit";

import comicsSlice from "./comics";
import cartSlice from "./cart";

// import Comic from "../models/comic";
// import { CartComic } from "../models/cartComic";

const store = configureStore({
  reducer: { comics: comicsSlice, cart: cartSlice }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
