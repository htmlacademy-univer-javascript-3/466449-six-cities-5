import { createSelector } from '@reduxjs/toolkit';
import { State } from '../props/State';
import { sortingOrders } from '../props/SortingOrder';

export const cityOffersSelector = createSelector(
  [
    (state: State) => state.offers.offers,
    (state: State) => state.offers.sortingOrder,
    (state: State) => state.city.city,
  ],
  (offers, order, city) =>
    offers.filter((o) => o.city.name === city).sort(sortingOrders[order])
);
