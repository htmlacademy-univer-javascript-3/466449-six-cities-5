﻿import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CityState = {
  city: string;
}

const initialState: CityState = {
  city: 'Paris',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
