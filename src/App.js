import React, { useEffect } from "react";
import "./App.css";
import {
  Route,
  Navigate,
  Routes,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ComicShoppingPage from "./pages/ComicShoppingPage";
import ComicDetailPage from "./pages/ComicDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useDispatch, useSelector } from "react-redux";
import { setComicSavedCart } from "./store/cart";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/Marvel_Comic_Shop",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "comics",
        element: <ComicShoppingPage />
      },
      { path: "comics/:comicId", element: <ComicDetailPage /> },
      { path: "cart", element: <ShoppingCartPage /> }
    ]
  }
]);

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  useEffect(() => {
    let savedCartState = localStorage.getItem("cartState");

    if (savedCartState) {
      dispatch(setComicSavedCart(JSON.parse(savedCartState)));
    } else {
      console.log(`there is not state`);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartItems));
  }, [cartItems]);

  return <RouterProvider router={router} />;
}

export default App;
