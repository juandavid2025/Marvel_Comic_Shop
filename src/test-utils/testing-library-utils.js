// src/test/utils/renderConnected.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

// Replace this with the appropriate imports for your project
import comicsSlice from "../store/comics";
import cartSlice from "../store/cart";
import { configureStore } from "@reduxjs/toolkit";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

// const renderConnected = (
//   ui,
//   {
//     store = configureStore({
//       reducer: { comics: comicsSlice, cart: cartSlice },
//     }),
//     ...renderOptions
//   } = {}
// ) => {
//   const Wrapper = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
//   );
//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };

// export * from "@testing-library/react";

// export { renderConnected as render };

// const initialLoadedState = { cart: initialState };

// function RenderNormalized(
//   ui,
//   {
//     preLoadedState = initialLoadedState,
//     routeHistory,
//     store = configureStore({
//       reducer: { comics: comicsSlice, cart: cartSlice },
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// // //re-export
// // export * from "@testing-library/react";

// export { RenderNormalized };\

const RenderNormalized = (props) => {
  const store = configureStore({
    reducer: { comics: comicsSlice, cart: cartSlice },
    preloadedState: props.initialState,
  });

  const history = [];

  return (
    // <Router history={history}></Router>
    <Provider store={store}>{props.children}</Provider>
  );
};

export default RenderNormalized;
