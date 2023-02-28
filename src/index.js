// import React from "react";
// import { render } from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import store from "./store/index";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";

import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./store/index";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );
