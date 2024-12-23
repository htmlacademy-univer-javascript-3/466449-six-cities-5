import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../props/State';
import { AxiosInstance } from 'axios';
import { fillOrdersAction, setOrdersLoadingStatusAction } from './Action';
import { ApiRoutes } from '../props/Constants';
import { Offer } from '../props/Offers';

export const fetchOrdersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_OFFERS', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOrdersLoadingStatusAction(true));
  const { data } = await api.get<Offer[]>(ApiRoutes.Offers);
  dispatch(setOrdersLoadingStatusAction(false));
  dispatch(fillOrdersAction(data));
});
