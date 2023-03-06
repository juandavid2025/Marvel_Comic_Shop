import { ResponseImage } from "./responseImage";
import { ResponseCreators } from "./responseCreators";
import { ResponseDate } from "./responseDate";
import { ResponsePrice } from "./responsePrice";

export interface ResponseComic {
  id: number;
  title: string;
  images: ResponseImage[];
  issueNumber: number;
  creators: ResponseCreators;
  dates: ResponseDate[];
  prices: ResponsePrice[];
  description: string;
}
