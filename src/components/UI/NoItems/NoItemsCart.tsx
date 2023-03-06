import React from "react";

import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";

import classes from "./NoItemsCart.module.css";

const NoItemsCart = () => {
  return (
    <div className={classes.noItems_div}>
      <IonIcon icon={cartOutline} className={classes.cart_icon} />
      <div className={classes.cross_line}></div>
      <h1>No Comics on Cart</h1>
    </div>
  );
};

export default NoItemsCart;
