import React from 'react';
import { MainScreen } from '../pages/MainScreen/MainScreen.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen.tsx';
import { FavoritesScreen } from '../pages/FavoritesScreen/FavoritesScreen.tsx';
import { OfferScreen } from '../pages/OfferScreen/OfferScreen.tsx';
import { NotFound } from '../components/NotFound.tsx';
import { AppRoutes, AuthorizationStatus } from '../props/Constants.ts';
import { Authorization } from './Autorisation.tsx';
import { Offer } from '../props/Offers.ts';
import { ReviewsMock } from '../mocks/reviews.ts';
import { Provider } from 'react-redux';
import { store } from '../store/Index.ts';
import { Review } from '../props/Review.ts';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
  isAuthorized: boolean;
}

export function App({offers, reviews, isAuthorized = false}: AppProps): React.JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.MainScreen}
            element={<MainScreen/>}
          />
          <Route path={AppRoutes.Login} element={<LoginScreen />} />
          <Route
            path={AppRoutes.Favorites}
            element={
              <Authorization isAuthorized={isAuthorized}>
                <FavoritesScreen offers={offers} />
              </Authorization>
            }
          />
          <Route path={AppRoutes.Offer} element={<OfferScreen reviews={ReviewsMock} offer={offers[0]} nearbyOffers={offers} authStatus={AuthorizationStatus.Auth}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
