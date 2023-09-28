import { useState, useEffect } from 'react';
import fetchMovies from '../../services/movie-api';
import { ReviewList, ReviewItem, Author } from './Review.styled'; // Імпорт стилів

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovies
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewList>
          {' '}
          {/* Використовуємо ReviewList замість <ul> */}
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              {' '}
              {/* Використовуємо ReviewItem замість <li> */}
              <Author>Author: {author}</Author>{' '}
              {/* Використовуємо Author замість <p> */}
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>There are no reviews for this movie yet...</p>
      )}
    </>
  );
};

export default Reviews;
