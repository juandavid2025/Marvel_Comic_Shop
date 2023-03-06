import React from "react";
import { useSelector } from "react-redux";
import Container from "../UI/Container/Container";
import ShoppingList from "./ShoppingList/ShoppingList";
import StripeCheckout from "react-stripe-checkout";

import { IonIcon } from "@ionic/react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StoreState } from "../../store";

import classes from "./ShoppingCart.module.css";
import { CartComic } from "../../models/cartComic";
import { cartOutline } from "ionicons/icons";

toast.configure();

const ShoppingCart = () => {
  const cartItems = useSelector<StoreState, CartComic[]>(
    state => state.cart.cart
  );

  // const paymentHandler = () => {
  //   console.log("payment");
  // };

  // Params -> token, addresses
  const handleToken = () => {
    toast("Sucess! Welcome to Avengers Initiative", { type: "success" });
  };

  return (
    <section className={classes.shoppingCart_section}>
      <Container>
        <div className={classes.shopping_box}>
          <IonIcon icon={cartOutline} className={classes.cart_icon} />
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
