import React, { useState, useEffect } from 'react';
import fetchMovies from '../../services/movie-api';
import { Link } from 'react-router-dom';
import {
  TrendingMoviesContainer,
  TrendingMoviesList,
  TrendingMovieItem,
  TrendingMovieLink,
} from './Homepage.styled';

const TrendingMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchTrendingMoviesByDay()
      .then(data => setTrendMovies(data))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);

  // Перевіримо, чи є trendMovies масивом
  if (!Array.isArray(trendMovies)) {
    return <div>Error: trendMovies is not an array</div>;
  }

  return (
    <TrendingMoviesContainer>
      <h1>Trending Movies</h1>
      <TrendingMoviesList>
        {trendMovies.map(movie => (
          <TrendingMovieItem key={movie.id}>
            <TrendingMovieLink as={Link} to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </TrendingMovieLink>
          </TrendingMovieItem>
        ))}
      </TrendingMoviesList>
    </TrendingMoviesContainer>
  );
};

export default TrendingMovies;
