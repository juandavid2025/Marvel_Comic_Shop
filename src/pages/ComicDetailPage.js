import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ComicDetail from "../components/ComicDetail/ComicDetail";
import Spinner from "../components/UI/Spinner/Spinner";
import { searchComicById } from "../store/comics";

const ComicDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const searchComic = useSelector(state => state.comics.searchComic);

  useEffect(() => {
    dispatch(searchComicById(params.comicId));
  }, [params.comicId, dispatch]);

  const showComicDetail = searchComic !== null;

  return (
    <Fragment>
      {showComicDetail && <ComicDetail foundComic={searchComic} />}
      {!showComicDetail && <Spinner />}
    </Fragment>
  );
};

export default ComicDetailPage;
