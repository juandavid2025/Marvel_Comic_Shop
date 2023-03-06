import React from "react";

import { Comic } from "../../models/comic";

import Container from "../UI/Container/Container";
import ComicItem from "./ComicItem/ComicItem";

import classes from "./ComicShop.module.css";

const ComicShop: React.FC<{ comicItems: Comic[] }> = props => {
  const comicItems = props.comicItems;

  return (
    <section className={classes.comicShop_section}>
      <Container>
        <div className={classes.comic_shop_grid}>
          {comicItems.map(comic => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComicShop;
