import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addComicToCart } from "../../../store/cart";
import classes from "./ComicItem.module.css";

const ComicItem = props => {
  const dispatch = useDispatch();

  const comicItem = props.comic;

  const extraImgClass =
    comicItem.imagePath ===
    `https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png`
      ? `${classes.no_comic_img}`
      : ``;

  let isLive = comicItem.focDate.includes("Live");

  const addToCartHandler = () => {
    dispatch(addComicToCart(comicItem));
  };

  const itemDetailHandler = () => {
    console.log("jeje");
  };

  return (
    <div className={classes.comic}>
      <NavLink to={`${comicItem.id}`}>
        <img
          className={[`${classes.comic_img} ${extraImgClass}`]}
          alt="Marvel Comic"
          src={comicItem.imagePath}
          onClick={itemDetailHandler}
        />
      </NavLink>
      <div className={classes.comic_content}>
        <p className={classes.comic_title}>{comicItem.title}</p>
        <ul className={classes.comic_details}>
          <li className={classes.comic_attribute}>
            <ion-icon name="print-outline"></ion-icon>
            <p>{comicItem.issueNumber}</p>
          </li>
          <li className={classes.comic_attribute}>
            <ion-icon name="pencil-outline"></ion-icon>
            <p>{comicItem.creators}</p>
          </li>
          <li className={classes.comic_attribute}>
            <ion-icon name="calendar-outline"></ion-icon>
            <p>{comicItem.saleDate}</p>
          </li>
          <li className={classes.comic_attribute}>
            {!isLive && <ion-icon name="alert-circle-outline"></ion-icon>}
            {isLive && <ion-icon name="radio-outline"></ion-icon>}
            <p>{comicItem.focDate}</p>
          </li>
        </ul>
        <div className={classes.comic_price}>
          <strong>${comicItem.price}</strong>
          <button className={classes.price_btn} onClick={addToCartHandler}>
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComicItem;
