import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled'; // Імпорт стилів

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./components/pages/Homepage'));
const MoviesPage = lazy(() => import('./components/pages/Moviepage'));
const MovieDetailsPage = lazy(() => import('./components/pages/Moviedetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Review/Reviews'));
const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </AppContainer>
    </Suspense>
  );
};

export default App;
