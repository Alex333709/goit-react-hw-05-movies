import React, { useEffect, useState } from 'react';
import fetchMovies from '../../services/movie-api';

const Reviews = ({ movieId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchMovies
      .fetchMovieReviews(movieId)
      .then(reviewsData => {
        if (reviewsData && reviewsData.results) {
          setData(reviewsData.results);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error(error);
        setData([]);
      });
  }, [movieId]);

  return (
    <ul>
      {data.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
