export interface ApiErrorResponse {
  error: string;
  message?: string;
  statusCode?: number;
}

export interface ISearchResponse {
  results: IMovie[];
}

export interface IApiRequest<T = any> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: T;
  headers?: Record<string, string>;
}