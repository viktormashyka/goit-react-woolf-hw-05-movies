import axios from 'axios';
import { API_KEY, BASE_URL } from './api-config';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMoviesToday = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesByTitle = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCreditsById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieReviewsById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
