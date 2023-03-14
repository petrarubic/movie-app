import axios from "axios";

// API key is stored here for the simplicity purposes
const API_KEY = "642270d4c37fb825c825c32094e006d5";
const baseUrl = "https://api.themoviedb.org/3";
const baseImageUrl = "https://image.tmdb.org/t/p/";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

// GET latest movies
export async function getLatestMovies() {
  return await apiClient
    .get(`${baseUrl}/discover/movie`, {
      params: {
        api_key: API_KEY,
        sort_by: "release_date.desc",
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// GET list of movie genres
export async function getGenres() {
  return await apiClient
    .get(`${baseUrl}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => res.data.genres)
    .catch((error) => console.log(error));
}

// GET movies by genre
export async function getMoviesByGenre(genreId) {
  return await apiClient
    .get(`${baseUrl}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// GET movies by entered search query
export async function searchMovies(query, pageParam) {
  return await apiClient
    .get(`${baseUrl}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page: pageParam,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// GET single movie details
export async function getMovieDetails(movieId) {
  return await apiClient
    .get(`${baseUrl}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

// GET movie poster image url
export function getMoviePosterImageUrl(movie) {
  if (!movie.poster_path) {
    return undefined;
  }

  return `${baseImageUrl}w500/${movie.poster_path}`;
}

// GET movie backdrop image url
export function getMovieBackdropImageUrl(movie) {
  if (!movie.backdrop_path) {
    return undefined;
  }

  return `${baseImageUrl}original/${movie.backdrop_path}`;
}
