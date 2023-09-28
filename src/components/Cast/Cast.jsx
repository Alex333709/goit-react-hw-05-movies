import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '../../services/movie-api';
import { CastWrapper, CastItem, CastName, CastCharacter } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovies.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <CastWrapper>
      {cast.length > 0 ? (
        cast.map(({ id, name, profile_path, character }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : 'not found image'
              }
              alt=""
            />
            <CastName>{name}</CastName>
            {character && <CastCharacter>{character}</CastCharacter>}
          </CastItem>
        ))
      ) : (
        <p>not found any cast info</p>
      )}
    </CastWrapper>
  );
};

export default Cast;
