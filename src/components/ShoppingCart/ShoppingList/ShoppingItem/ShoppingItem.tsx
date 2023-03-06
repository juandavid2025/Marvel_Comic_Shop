import React from "react";
import { useDispatch } from "react-redux";
import { CartComic } from "../../../../models/cartComic";
import { addComicToCart, subtractComicFromCart } from "../../../../store/cart";

import { AppDispatch } from "../../../../store";

import classes from "./ShoppingItem.module.css";

const ShoppingItem: React.FC<{ cartItem: CartComic }> = props => {
  const dispatch: AppDispatch = useDispatch();
  const cartItem = props.cartItem;

  const plusComicHandler = () => {
    dispatch(addComicToCart(cartItem.comic));
  };

  const subtractComicHandler = () => {
    dispatch(subtractComicFromCart(cartItem.comic.id));
  };

  const itemPrice = (cartItem.comic.price * cartItem.comicAmount).toFixed(2);

  return (
    <div className={classes.item_box}>
      <img
        className={classes.item_img}
        src={cartItem.comic.imagePath}
        alt="Marvel Comic"
      />
      <div className={classes.main_cart_info}>
        <h2>{cartItem.comic.title}</h2>
        <p>#{cartItem.comic.id}</p>
      </div>
      <p className={classes.comic_amount}>x{cartItem.comicAmount}</p>
      <div className={classes.actions}>
        <button onClick={plusComicHandler}>+</button>
        <button onClick={subtractComicHandler}>-</button>
      </div>
      <p className={classes.totalComic}>${itemPrice}</p>
    </div>
  );
};

export default ShoppingItem;
