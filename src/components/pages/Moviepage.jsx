import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import fetchMovies from '../../services/movie-api';

const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const queryValue = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (queryValue) {
      setSearchQuery(queryValue);
    }
  }, [queryValue]);

  useEffect(() => {
    if (!queryValue) {
      setMovies([]);
      return;
    }

    // Перевірка, щоб запускати запит тільки після введення мінімум 3 символів
    if (searchQuery.length >= 3) {
      fetchMovies
        .fetchSearchMovie(queryValue)
        .then(results => setMovies(results))
        .catch(() => {
          setMovies([]);
        });
    }
  }, [queryValue, searchQuery]);

  const handleQueryChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    navigate(`/movies?query=${searchQuery}`);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {movies.length === 0 && searchQuery && searchQuery.length >= 3 && (
        <p>No movies found.</p>
      )}

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}?query=${searchQuery}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
