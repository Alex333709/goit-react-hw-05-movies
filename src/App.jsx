import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled'; // Імпорт стилів

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./components/HomePage/Homepage'));
const MoviesPage = lazy(() => import('./components/MoviePage/Moviepage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetails/Moviedetails')
);

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
};

export default App;
