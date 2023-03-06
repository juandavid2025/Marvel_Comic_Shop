import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./index";

import { Comic } from "../models/comic";
import { ResponseImage } from "../models/responseImage";
import { ResponseCreators } from "../models/responseCreators";
import { ResponsePrice } from "../models/responsePrice";
import { ResponseObject } from "../models/responseObject";

const initialState: {
  comics: Comic[];
  searchComic: Comic | null;
  isLoading: boolean;
  error: Error | null;
} = {
  comics: [],
  searchComic: null,
  isLoading: false,
  error: null
};

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    setComics(state, action: { payload: Comic[]; type: string }) {
      state.comics = action.payload;
    },
    setSearchComic(state, action: { payload: Comic | null; type: string }) {
      state.searchComic = action.payload;
    },
    setIsLoading(state, action: { payload: boolean; type: string }) {
      state.isLoading = action.payload;
    },
    setError(state, action: { payload: Error; type: string }) {
      state.error = action.payload;
    }
  }
});

// API key original 06429c24807d8e4edcfd03ade9caa5fc
export const fetchComics = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=c0e7c1f1d7331dbbaa2aa60e6f00e520&hash=c55b4a5edeb7cc29add5f799dc5a9be3";

  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("comics request failed");
      }
      const data: ResponseObject = await response.json();
      console.log(data);

      const transformedComicData = formatComicData(data);

      if (transformedComicData.length > 0)
        dispatch(comicsActions.setComics(transformedComicData));
    } catch (err) {
      err instanceof Error
        ? console.error(err.message)
        : console.error("Unknown Error");
    }
  };
};

export const searchComicById = (id: number) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=c0e7c1f1d7331dbbaa2aa60e6f00e520&hash=c55b4a5edeb7cc29add5f799dc5a9be3`;

  return async (dispatch: AppDispatch) => {
    dispatch(comicsActions.setSearchComic(null));
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Unable to get details of comic ${id}`);
      }

      const data: ResponseObject = await response.json();

      const [foundComic] = formatComicData(data);

      if (foundComic) dispatch(comicsActions.setSearchComic(foundComic));
    } catch (err) {
      err instanceof Error
        ? console.error(err.message)
        : console.error("Unknown Error");
    }
  };
};

const formatComicData = (comicApiData: ResponseObject) => {
  return comicApiData.data.results.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      imagePath: generateImgPath(comic.images),
      issueNumber: comic.issueNumber,
      creators: getCreatorsString(comic.creators) || "No creators found",
      saleDate: comic.dates[0].date,
      focDate: comic.dates[1].date,
      price: calcAveragePrice(comic.prices),
      description:
        comic.description || "No Description available for this comic"
    } as Comic;
  });
};

const generateImgPath = (imgList: ResponseImage[]): string => {
  return imgList.length > 0
    ? `${imgList[0].path}.${imgList[0].extension}`
    : `https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png`;
};

const getCreatorsString = (creators: ResponseCreators): string => {
  return creators.items
    .map(creator => creator.name.split(" ").at(0))
    .join(", ");
};

const calcAveragePrice = (prices: ResponsePrice[]): number => {
  return prices
    .filter(price => price.price !== 0)
    .reduce((accumulator, current, index, arr) => {
      return index === arr.length
        ? (accumulator + current.price) / arr.length
        : accumulator + current.price;
    }, 0);
};

//-----------------EXPORTS---------------------
export const comicsActions = comicsSlice.actions;
export default comicsSlice.reducer;

// interface ResponseImage {
//   path: string;
//   extension: string;
// }

// interface ResponseCreators {
//   items: { name: string; role: string }[];
// }

// interface ResponseDate {
//   type: string;
//   date: string;
// }

// interface ResponsePrice {
//   type: string;
//   price: number;
// }

// interface ResponseComic {
//   id: number;
//   title: string;
//   images: ResponseImage[];
//   issueNumber: number;
//   creators: ResponseCreators;
//   dates: ResponseDate[];
//   prices: ResponsePrice[];
//   description: string;
// }

// interface ResponseObject {
//   data: {
//     results: ResponseComic[];
//   };
// }
