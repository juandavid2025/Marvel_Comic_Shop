import React from "react";
import { useDispatch } from "react-redux";
import { addComicToCart } from "../../store/cart";
import Container from "../UI/Container/Container";

import { IonIcon } from "@ionic/react";

import { Comic } from "../../models/comic";
import { AppDispatch } from "../../store";

import classes from "./ComicDetail.module.css";
import {
  alertCircleOutline,
  calendarOutline,
  pencilOutline,
  printOutline,
  radioOutline
} from "ionicons/icons";

const ComicDetail: React.FC<{ foundComic: Comic }> = props => {
  const dispatch: AppDispatch = useDispatch();
  const comic = props.foundComic;

  const addComicToCartHandler = () => {
    dispatch(addComicToCart(comic));
  };

  const comicSaleDate = new Date(comic.saleDate);
  const comicFocDate = new Date(comic.focDate);

  const isLiveSelling = !isNaN(comicFocDate.getDate());

  return (
    <section className={classes.comicDetail_section}>
      <Container>
        <div className={classes.comic_detail_box}>
          <img
            src={comic.imagePath}
            alt="Marvel Comic"
            className={classes.comicImg}
          />
          <div className={classes.comicInfo}>
            <h2 className={classes.comic_title}>{comic.title}</h2>
            <p
              className={`${classes.comic_detail} ${classes.comic_description}`}
            >
              {comic.description}
            </p>
            <div className={classes.detail_icon_box}>
              <IonIcon icon={printOutline} className={classes["detail-icon"]} />
              <p className={classes.comic_detail}>
                {comic.issueNumber} issue number
              </p>
            </div>
            <div className={classes.detail_icon_box}>
              <IonIcon
                icon={pencilOutline}
                className={classes["detail-icon"]}
              />
              <p className={classes.comic_detail}>Creators: {comic.creators}</p>
            </div>
            <div className={classes.detail_icon_box}>
              <IonIcon
                icon={calendarOutline}
                className={classes["detail-icon"]}
              />
              <p className={classes.comic_detail}>
                {`${comicSaleDate.getDate()}/${comicSaleDate.getMonth()}/${comicSaleDate.getFullYear()}`}{" "}
                sale date
              </p>
            </div>
            <div className={classes.detail_icon_box}>
              {isLiveSelling && (
                <IonIcon
                  icon={radioOutline}
                  className={classes["detail-icon"]}
                />
              )}
              {!isLiveSelling && (
                <IonIcon
                  name="alert-circle-outline"
                  icon={alertCircleOutline}
                  className={classes["detail-icon"]}
                />
              )}
              <p className={classes.comic_detail}>
                {isLiveSelling
                  ? `${comicFocDate.getDate()}/${comicFocDate.getMonth()}/${comicFocDate.getFullYear()}`
                  : "No longer available"}
                {!isLiveSelling ? " foc date" : ""}
              </p>
            </div>
            <p className={classes.comic_detail}>
              <strong>${comic.price}</strong>
            </p>
            <button
              className={classes.addCart_btn}
              onClick={addComicToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComicDetail;
