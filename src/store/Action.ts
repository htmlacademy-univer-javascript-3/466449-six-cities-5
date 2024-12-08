import { createAction } from '@reduxjs/toolkit';
import { _Location } from '../props/OffersMocks';

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: _Location) => ({
    payload: value,
  })
);

export const fillOrdersAction = createAction('FILL_ORDERS');