import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import NoItemsCart from "../components/UI/NoItems/NoItemsCart";

import { StoreState } from "../store";

const ShoppingCartPage = () => {
  const cartItemsAmount = useSelector<StoreState, number>(
    state => state.cart.cartAmount
  );

  return (
    <Fragment>
      {cartItemsAmount > 0 && <ShoppingCart />}
      {cartItemsAmount === 0 && <NoItemsCart />}
    </Fragment>
  );
};

export default ShoppingCartPage;
