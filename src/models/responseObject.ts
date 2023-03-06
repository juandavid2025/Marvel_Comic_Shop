import { ResponseComic } from "./responseComic";

export interface ResponseObject {
  data: {
    results: ResponseComic[];
  };
}
