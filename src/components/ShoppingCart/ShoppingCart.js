import React from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container";
import ShoppingList from "./ShoppingList/ShoppingList";
import StripeCheckout from "react-stripe-checkout";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./ShoppingCart.module.css";

toast.configure();

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  // const paymentHandler = () => {
  //   console.log("payment");
  // };

  const handleToken = (token, addresses) => {
    toast("Sucess! Welcome to Avengers Initiative", { type: "success" });
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
          {/* <button className={classes.pay_btn} onClick={paymentHandler}>
            <ion-icon name="card-outline"></ion-icon>
            <p>Continue to Payment</p>
          </button> */}
          <StripeCheckout
            stripeKey="pk_test_51K4g08BzkmWAXr8BpBQCHgIc171GcTHB1Y8GEs69zXqne8gE5c8dAbqEBFnzLMleQQPyD5TkyNg7p03hRmV024uW00zoCMtxwc"
            token={handleToken}
          />
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCart;
