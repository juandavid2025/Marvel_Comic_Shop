import React from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container";
import ShoppingList from "./ShoppingList/ShoppingList";

import classes from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const paymentHandler = () => {
    console.log("payment");
  };

  return (
    <section className={classes.shoppingCart_section}>
      <Container>
        <div className={classes.shopping_box}>
          <div className={classes.icon_container}>
            <ion-icon
              name="cart-outline"
              className={classes.cart_icon}
            ></ion-icon>
          </div>
          <ShoppingList cartItems={cartItems} />
          <button className={classes.pay_btn} onClick={paymentHandler}>
            <ion-icon name="card-outline"></ion-icon>
            <p>Continue to Payment</p>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCart;
