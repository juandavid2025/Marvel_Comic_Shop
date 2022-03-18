import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComicShop from "../components/ComicShop/ComicShop";
import Spinner from "../components/UI/Spinner/Spinner";
import { fetchComics } from "../store/comics";

const ComicShoppingPage = () => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics.comics);

  console.log(comics);

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  let showShop = comics.length > 0;

  return (
    <Fragment>
      {showShop && <ComicShop comicItems={comics} />}
      {!showShop && <Spinner />}
    </Fragment>
  );
};

export default ComicShoppingPage;
