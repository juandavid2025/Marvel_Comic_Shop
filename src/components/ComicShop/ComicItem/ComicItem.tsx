import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { printOutline } from "ionicons/icons";
import { pencilOutline } from "ionicons/icons";
import { calendarOutline } from "ionicons/icons";
import { alertCircleOutline } from "ionicons/icons";
import { radioOutline } from "ionicons/icons";

import { Comic } from "../../../models/comic";
import { AppDispatch } from "../../../store";

import { addComicToCart } from "../../../store/cart";
import classes from "./ComicItem.module.css";

const ComicItem: React.FC<{ comic: Comic }> = props => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const comicItem = props.comic;

  // const extraImgClass =
  //   comicItem.imagePath ===
  //   `https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png`
  //     ? `${classes.no_comic_img}`
  //     : ``;
  //${extraImgClass}

  const comicSaleDate = new Date(comicItem.saleDate);
  const comicFocDate = new Date(comicItem.focDate);

  const isLive = !isNaN(comicFocDate.getDate());

  const addToCartHandler = () => {
    dispatch(addComicToCart(comicItem));
  };

  const itemDetailHandler = () => {
    navigate(`${comicItem.id}`);
  };

  return (
    <div className={classes.comic}>
      <div className={classes["img-container"]}>
        <img
          className={classes["comic-img"]}
          alt="Marvel Comic"
          src={comicItem.imagePath}
          onClick={itemDetailHandler}
        />
      </div>
      <div className={classes["comic-info"]}>
        <p className={classes["comic-info-title"]}>{comicItem.title}</p>
        <ul className={classes["comic-info-details"]}>
          <li className={classes["info-detail"]}>
            <IonIcon icon={printOutline} className={classes["info-icon"]} />
            <p>{comicItem.issueNumber}</p>
          </li>
          <li className={classes["info-detail"]}>
            <IonIcon icon={pencilOutline} className={classes["info-icon"]} />
            <p>{comicItem.creators}</p>
          </li>
          <li className={classes["info-detail"]}>
            <IonIcon icon={calendarOutline} className={classes["info-icon"]} />
            <p>{`${comicSaleDate.getDate()}/${comicSaleDate.getMonth()}/${comicSaleDate.getFullYear()}`}</p>
          </li>
          <li className={classes["info-detail"]}>
            {!isLive && (
              <IonIcon
                icon={alertCircleOutline}
                className={classes["info-icon"]}
              />
            )}
            {isLive && (
              <IonIcon icon={radioOutline} className={classes["info-icon"]} />
            )}
            <p>
              {isLive
                ? `${comicFocDate.getDate()}/${comicFocDate.getMonth()}/${comicFocDate.getFullYear()}`
                : "No longer available"}
            </p>
          </li>
        </ul>
      </div>
      <div className={classes["comic-price-action"]}>
        <strong className={classes["comic-price"]}>${comicItem.price}</strong>
        <button className={classes["comic-add-btn"]} onClick={addToCartHandler}>
          Add to card
        </button>
      </div>
    </div>
  );
};

export default ComicItem;
