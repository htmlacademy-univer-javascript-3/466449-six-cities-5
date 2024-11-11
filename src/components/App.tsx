import React from 'react';
import { MainScreen } from '../pages/MainScreen.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LodinScreen.tsx';
import { FavoritesScreen } from '../pages/FavoritesScreen.tsx';
import { OfferScreen } from '../pages/OfferScreen.tsx';
import { NotFound } from '../components/NotFound.tsx';
import { AppRoutesProps } from '../props/AppRoutesProps.ts';
import { Authorization } from './Autorisation.tsx';
import { PlaceMock } from '../props/PlaceMocks.ts';
import { ReviewsMock } from '../mocks/reviews.ts';
import { Cities } from '../mocks/cities.ts';

type AppProps = {
  offers: PlaceMock[];
  isAuthorized: boolean;
}

export function App({offers, isAuthorized = false}: AppProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutesProps.MainScreen}
          element={<MainScreen offers={offers} city={Cities.find((c) => c.name === 'Amsterdam') || Cities[0]}/>}
        />
        <Route path={AppRoutesProps.Login} element={<LoginScreen />} />
        <Route
          path={AppRoutesProps.Favorites}
          element={
            <Authorization isAuthorized={isAuthorized}>
              <FavoritesScreen offers={offers} />
            </Authorization>
          }
        />
        <Route path={AppRoutesProps.Offer} element={<OfferScreen initialReviews={ReviewsMock} offer={offers[0]}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

