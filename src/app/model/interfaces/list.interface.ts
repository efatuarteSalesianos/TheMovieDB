import { Movie } from "./movies-popular.interface";

export interface ListResponse {
  page: number;
  results: List[];
  total_pages: number;
  total_results: number;
}

export interface List {
  created_by: number;
  description: string;
  favorite_count: number;
  id: number;
  items: Movie[];
  list_type: MediaType;
  item_count: number;
  iso_639_1: ISO639_1;
  name: string;
  poster_path: string;
}

export enum ISO639_1 {
  En = 'en',
}

export enum MediaType {
  Movie = "movie",
}
