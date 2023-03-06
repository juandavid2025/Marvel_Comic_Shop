import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, StoreState } from "../store";
import { fetchComics } from "../store/comics";
import { Comic } from "../models/comic";

import ComicShop from "../components/ComicShop/ComicShop";
import Spinner from "../components/UI/Spinner/Spinner";

const ComicShoppingPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const comics = useSelector<StoreState, Comic[]>(state => state.comics.comics);

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  let showShop = comics.length > 0;

  return <>{showShop ? <ComicShop comicItems={comics} /> : <Spinner />}</>;
};

export default ComicShoppingPage;
