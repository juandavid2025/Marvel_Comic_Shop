import React from "react";
import { CartComic } from "../../../models/cartComic";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import classes from "./ShoppingList.module.css";

const ShoppingList: React.FC<{ cartItems: CartComic[] }> = props => {
  const itemsOnCart = props.cartItems;

  const totalPrice = itemsOnCart
    .reduce((acc, curr) => {
      return acc + curr.comicAmount * curr.comic.price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div className={classes.cart_box}>
        <div className={classes.cart_list}>
          {itemsOnCart.map(item => (
            <ShoppingItem key={item.comic.id} cartItem={item} />
          ))}
        </div>
        <p className={classes.total_price}>{`Total: $${totalPrice}`}</p>
      </div>
    </>
  );
};

export default ShoppingList;
