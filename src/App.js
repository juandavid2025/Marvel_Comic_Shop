import React, { Fragment, useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.css";
import ComicShoppingPage from "./pages/ComicShoppingPage";
import ComicDetailPage from "./pages/ComicDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useDispatch, useSelector } from "react-redux";
import { setComicSavedCart } from "./store/cart";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

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

  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/comics" />} />
          <Route path="/comics" element={<ComicShoppingPage />} />
          <Route path="/comics/:comicId" element={<ComicDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
