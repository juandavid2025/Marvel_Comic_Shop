import React from "react";

import classes from "./NoItemsCart.module.css";

const NoItemsCart = () => {
  return (
    <div className={classes.noItems_div}>
      <ion-icon name="cart-outline" className={classes.cart_icon}></ion-icon>
      <h1>No Comics on Cart</h1>
    </div>
  );
};

export default NoItemsCart;
