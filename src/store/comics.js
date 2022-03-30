import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comics: [],
  searchComic: null,
  isLoading: false,
  error: null,
};

const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    setComics(state, action) {
      state.comics = action.payload;
    },
    setSearchComic(state, action) {
      state.searchComic = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const fetchComics = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/comics?apikey=06429c24807d8e4edcfd03ade9caa5fc";

  return async (dispatch) => {
    try {
      const response = await fetch(url);

      console.log(response);

      if (!response.ok) {
        throw new Error("comics request failed");
      }
      const data = await response.json();
      // console.log(data);
      const transformedData = formatComicData(data);

      dispatch(comicsActions.setComics(transformedData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const searchComicById = (id) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=06429c24807d8e4edcfd03ade9caa5fc`;

  return async (dispatch) => {
    // -----Check how to improve this part-----
    dispatch(comicsActions.setSearchComic(null));
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`unable to fetch comic ${id}`);
      }

      const data = await response.json();

      const transformedData = formatComicData(data);

      if (transformedData.length > 0) {
        const foundComic = transformedData[0];

        foundComic.description =
          (data.data.results[0].description === null) |
          (data.data.results[0].description === "") |
          (data.data.results[0].description === "#N/A")
            ? "No Description available"
            : data.data.results[0].description;

        dispatch(comicsActions.setSearchComic(foundComic));
      } else {
        throw new Error(`No comic found with id ${id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

const formatComicData = (comicApiData) => {
  return comicApiData.data.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      imagePath: generateImgPath(item.images),
      issueNumber: item.issueNumber,
      creators: getCreators(item.creators, 2),
      saleDate: getFormattedDate(item.dates[0].date),
      focDate: getFormattedDate(item.dates[1].date),
      price: calcAveragePrice(item.prices),
    };
  });
};

const calcAveragePrice = (prices) => {
  let price = 0;

  prices.forEach((element) => {
    price += element.price;
  });

  return price;
};

const getCreators = (creatorsList, max) => {
  let creators = "------";
  if (creatorsList.items.length > max) {
    creators = creatorsList.items
      .map((creator) => creator.name)
      .slice(0, 2)
      .join(", ");
  } else if (creatorsList.items.length > 0) {
    creators = creatorsList.items.map((creator) => creator.name).join(", ");
  }

  return creators;
};

const generateImgPath = (imgList) =>
  imgList.length > 0
    ? `${imgList[0].path}.${imgList[0].extension}`
    : `https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png`;

const getFormattedDate = function (time) {
  const dateObj = new Date(time);
  let message = "Live selling";

  if (time.charAt(0) !== "-") {
    message = `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
  }

  return message;
};

//--------------------------------------
export const comicsActions = comicsSlice.actions;
export default comicsSlice.reducer;
