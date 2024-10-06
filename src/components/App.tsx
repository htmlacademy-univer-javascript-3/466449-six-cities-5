import React from 'react';
import { MainScreen } from '../pages/MainScreen.tsx';
import { MainScreenProps } from '../props/MainScreenProps.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LodinScreen.tsx';
import { FavoritesScreen } from '../pages/FavoritesScreen.tsx';
import { OfferScreen } from '../pages/OfferScreen.tsx';
import { NotFound } from '../components/NotFound.tsx';
import { AppRoutesProps } from '../props/AppRoutesProps.ts';
import { Authorization } from './Autorisation.tsx';

export function App({placeCount}: MainScreenProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutesProps.MainScreen}
          element={<MainScreen placeCount={placeCount} />}
        />
        <Route path={AppRoutesProps.Login} element={<LoginScreen />} />
        <Route
          path={AppRoutesProps.Favorites}
          element={
            <Authorization>
              <FavoritesScreen />
            </Authorization>
          }
        />
        <Route path={AppRoutesProps.Offer} element={<OfferScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

