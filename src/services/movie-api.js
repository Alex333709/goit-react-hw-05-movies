import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c9b08f524057dbce5849a7bccd964443';

const fetchMovies = {
  fetchTrendingMoviesByDay() {
    return axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.data.results)
      .catch(error => {
        console.error('There was an error:', error);
        // або показати повідомлення користувачеві
      });
  },

  fetchSearchMovie(querySearch) {
    return axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&include_adult=false&query=${querySearch}`
      )
      .then(response => response.data.results)
      .catch(error => {
        console.error('There was an error:', error);
        // або показати повідомлення користувачеві
      });
  },

  fetchMoviesById(movieId) {
    // console.log('Fetching movie with ID:', movieId);
    return axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error:', error);
        // або показати повідомлення користувачеві
      });
  },

  fetchMovieCast(movieId) {
    return axios
      .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error:', error);
        // або показати повідомлення користувачеві
      });
  },

  fetchMovieReviews(movieId) {
    return axios
      .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        console.error('There was an error:', error);
        // або показати повідомлення користувачеві
      });
  },
};

export default fetchMovies;
