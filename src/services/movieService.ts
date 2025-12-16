import { ISearchRequest, ISearchResponse, IMovieApiResponse } from '../types';

const API_BASE_URL = '/api/webhook/botflix';

export const movieService = {
  searchMovies: async (request: ISearchRequest): Promise<IMovieApiResponse> => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data: IMovieApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      throw error;
    }
  }
};