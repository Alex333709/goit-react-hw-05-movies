import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingMoviesContainer = styled.div`
  text-align: center;
`;

export const TrendingMoviesList = styled.ul`
  list-style: none;
`;

export const TrendingMovieItem = styled.li`
  margin-bottom: 1rem;
`;

export const TrendingMovieLink = styled(Link)`
  text-decoration: none;
  color: #007bff; /* Колір тексту лінка */
  font-weight: bold; /* Жирний шрифт */
  transition: color 0.3s; /* Плавна анімація зміни кольору */
  cursor: pointer; /* Зміна курсору при наведенні */

  /* Стилі для наведення мишки на лінк */
  &:hover {
    color: #0056b3; /* Змінюємо колір тексту при наведенні */
  }
`;
