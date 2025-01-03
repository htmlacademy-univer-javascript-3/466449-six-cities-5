﻿import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../props/Offers';
import { SortingOrder } from '../../props/SortingOrder';
import { FavoriteData } from '../../props/FavoriteData';

type OffersState = {
  offers: Offer[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
  favorites: Offer[];
}

const initialState: OffersState = {
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
  favorites: []
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    fillOrders(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    setOrdersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.offersLoadingStatus = action.payload;
    },
    changeSortingOrder(state, action: PayloadAction<SortingOrder>) {
      state.sortingOrder = action.payload;
    },
    changeFavoriteStatus(state, action: PayloadAction<FavoriteData>) {
      const { offerId, isFavorite } = action.payload;
      const offer = state.offers.find((x) => x.id === offerId);
      if (offer) {
        offer.isFavorite = isFavorite;
        if (isFavorite && !state.favorites.find((x) => x.id === offerId)) {
          state.favorites.push(offer);
        } else {
          state.favorites = state.favorites.filter((x) => x.id !== offerId);
        }
      }
    },
    fillFavorites(state, action: PayloadAction<Offer[]>) {
      state.favorites = action.payload;
    },
  },
});

export const { fillOrders, setOrdersLoadingStatus, changeSortingOrder, changeFavoriteStatus, fillFavorites } = offersSlice.actions;
export default offersSlice.reducer;
