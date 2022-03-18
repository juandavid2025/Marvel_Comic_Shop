import { configureStore } from "@reduxjs/toolkit";

import comicsSlice from "./comics";
import cartSlice from "./cart";

const store = configureStore({
  reducer: { comics: comicsSlice, cart: cartSlice },
});

export default store;
