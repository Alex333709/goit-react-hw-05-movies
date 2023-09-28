import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import fetchMovies from '../../services/movie-api';

// Імпортуємо стилізацію зі styled-components
import {
  MovieDetailsContainer,
  GoBackButton,
  MovieImage,
  MovieText,
  MovieTitle,
  MovieDescription,
} from './Moviedetails.styled';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Review/Reviews'));

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    fetchMovies.fetchMoviesById(movieId).then(response => setMovie(response));
  }, [movieId]);

  const onGoBack = () => {
    navigate(`/movies?query=${searchQuery}`);
  };

  return (
    <MovieDetailsContainer>
      {movie && (
        <>
          <GoBackButton type="button" onClick={onGoBack}>
            Go back
          </GoBackButton>
          <div className="movie_details">
            <MovieImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <MovieText>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDescription>{movie.overview}</MovieDescription>
            </MovieText>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="./cast">Cast</Link>
              </li>
              <li>
                <Link to="./reviews">Reviews</Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetailsPage;
