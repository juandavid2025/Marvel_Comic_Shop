import React from "react";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import classes from "./ShoppingList.module.css";

const ShoppingList = (props) => {
  const itemsOnCart = props.cartItems;

  const calcTotalPrice = (cartComics) =>
    cartComics.reduce((sum, a) => sum + a.price * a.amount, 0);

  const totalPrice = calcTotalPrice(itemsOnCart).toFixed(2);

  return (
    <div className={classes.display_list}>
      <div className={classes.cartList_box}>
        {itemsOnCart.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </div>
      <p className={classes.total_price}>${totalPrice}</p>
    </div>
  );
};

export default ShoppingList;
