import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/cities';
import { offerMocks } from '../mocks/offers';
import { changeCityAction, fillOrdersAction } from './Action';
import { State } from '../props/State';


const initialState: State = {
  city: Cities[3],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOrdersAction, (state) => {
      state.offers = offerMocks;
    });
});