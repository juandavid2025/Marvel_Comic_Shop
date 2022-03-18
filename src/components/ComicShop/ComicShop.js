import React from "react";
import Container from "../UI/Container";
import ComicItem from "./ComicItem/ComicItem";

import classes from "./ComicShop.module.css";

const ComicShop = (props) => {
  const comicItems = props.comicItems;

  // console.log(comicItems);

  return (
    <section className={classes.comicShop_section}>
      <Container>
        <div className={classes.comic_shop_grid}>
          {comicItems.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComicShop;
