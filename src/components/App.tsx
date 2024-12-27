import React from 'react';
import { MainScreen } from '../pages/MainScreen/MainScreen.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen.tsx';
import { FavoritesScreen } from '../pages/FavoritesScreen/FavoritesScreen.tsx';
import { OfferScreen } from '../pages/OfferScreen/OfferScreen.tsx';
import { NotFound } from '../components/NotFound.tsx';
import { AppRoutes, AuthorizationStatus } from '../props/Constants.ts';
import { Offer } from '../props/Offers.ts';
import { Provider } from 'react-redux';
import { store } from '../store/Index.ts';
import { Review } from '../props/Review.ts';
import PrivateRoute from './routes/PrivateRoute.tsx';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
}

export function App({offers, reviews}: AppProps): React.JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.MainScreen}
            element={<MainScreen/>}
          />
          <Route
            path={AppRoutes.Login}
            element={<LoginScreen />}
          />
          <Route
            element={<PrivateRoute />}
          >
            <Route
              path={AppRoutes.Favorites}
              element={<FavoritesScreen offers={offers} />}
            />
          </Route>
          <Route
            path={AppRoutes.Offer}
            element={
              <OfferScreen
                reviews={reviews}
                offer={offers[0]}
                nearbyOffers={offers}
                authStatus={AuthorizationStatus.Auth}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
