import React from "react";
import { useDispatch } from "react-redux";
import { addComicToCart, subtractComicFromCart } from "../../../../store/cart";

import classes from "./ShoppingItem.module.css";

const ShoppingItem = (props) => {
  const dispatch = useDispatch();
  const cartItem = props.item;

  const plusComicHandler = () => {
    dispatch(addComicToCart(cartItem));
  };

  const subtractComicHandler = () => {
    dispatch(subtractComicFromCart(cartItem));
  };

  let itemPrice = (cartItem.price * cartItem.amount).toFixed(2);

  return (
    <div className={classes.item_box}>
      <img
        className={classes.item_img}
        src={cartItem.imagePath}
        alt="Marvel Comic"
      />
      <div className={classes.main_cart_info}>
        <h2>{cartItem.title}</h2>
        <p>#{cartItem.id}</p>
      </div>
      <p>x{cartItem.amount}</p>
      <div className={classes.actions}>
        <button onClick={plusComicHandler}>+</button>
        <button onClick={subtractComicHandler}>-</button>
      </div>
      <p>${itemPrice}</p>
    </div>
  );
};

export default ShoppingItem;
