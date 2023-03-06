import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ComicDetail from "../components/ComicDetail/ComicDetail";
import Spinner from "../components/UI/Spinner/Spinner";
import { searchComicById } from "../store/comics";

import { AppDispatch, StoreState } from "../store";
import { Comic } from "../models/comic";

const ComicDetailPage = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const searchComic = useSelector<StoreState, Comic | null>(
    state => state.comics.searchComic
  );

  useEffect(() => {
    if (params.comicId !== undefined) {
      dispatch(searchComicById(+params.comicId));
    }
  }, [params.comicId, dispatch]);

  const showComicDetail = searchComic !== null;

  return showComicDetail ? (
    <ComicDetail foundComic={searchComic} />
  ) : (
    <Spinner />
  );
};

export default ComicDetailPage;
