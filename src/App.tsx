import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setComicSavedCart } from "./store/cart";

import HomePage from "./pages/HomePage";
import ComicShoppingPage from "./pages/ComicShoppingPage";
import ComicDetailPage from "./pages/ComicDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

import { AppDispatch, StoreState } from "./store";
import { CartComic } from "./models/cartComic";

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
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector<StoreState, CartComic[]>(
    state => state.cart.cart
  );

  useEffect(() => {
    const savedCartState = localStorage.getItem("cartComicState");

    if (savedCartState) {
      dispatch(setComicSavedCart(JSON.parse(savedCartState)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartComicState", JSON.stringify(cartItems));
  }, [cartItems]);

  return <RouterProvider router={router} />;
}

export default App;
