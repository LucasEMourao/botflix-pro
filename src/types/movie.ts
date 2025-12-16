export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  vote_average: number;
  release_date?: string;
  genre_ids?: number[];
  backdrop_path?: string;
  popularity?: number;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  genre_names?: string[]; // Additional field for genre names
}

export interface IMovieApiResponse {
  results: IMovie[];
  page?: number;
  total_pages?: number;
  total_results?: number;
}

export interface ISearchRequest {
  userPrompt: string;
}