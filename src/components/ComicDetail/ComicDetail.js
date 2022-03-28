import React from "react";
import { useDispatch } from "react-redux";
import { addComicToCart } from "../../store/cart";
import Container from "../UI/Container";
import classes from "./ComicDetail.module.css";

const ComicDetail = (props) => {
  const dispatch = useDispatch();
  const comic = props.foundComic;

  const addComicToCartHandler = () => {
    dispatch(addComicToCart(comic));
  };

  const isLiveSelling = comic.focDate.includes("Live");

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
            <h2 className={[`${classes.comic_detail} ${classes.comic_title}`]}>
              {comic.title}
            </h2>
            <p
              className={[
                `${classes.comic_detail} ${classes.comic_description}`,
              ]}
            >
              {comic.description}
            </p>
            <div className={classes.detail_icon_box}>
              <ion-icon name="print-outline"></ion-icon>
              <p className={classes.comic_detail}>
                {comic.issueNumber} issue number
              </p>
            </div>
            <div className={classes.detail_icon_box}>
              <ion-icon name="pencil-outline"></ion-icon>
              <p className={classes.comic_detail}>Creators: {comic.creators}</p>
            </div>
            <div className={classes.detail_icon_box}>
              <ion-icon name="calendar-outline"></ion-icon>
              <p className={classes.comic_detail}>{comic.saleDate} sale date</p>
            </div>
            <div className={classes.detail_icon_box}>
              {isLiveSelling && <ion-icon name="radio-outline"></ion-icon>}
              {!isLiveSelling && (
                <ion-icon name="alert-circle-outline"></ion-icon>
              )}
              <p className={classes.comic_detail}>
                {comic.focDate}
                {!isLiveSelling ? " foc date" : ""}
              </p>
            </div>
            <p className={classes.comic_detail}>
              <strong>${comic.price}</strong>
            </p>
          </div>
          <button
            className={classes.addCart_btn}
            onClick={addComicToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ComicDetail;
