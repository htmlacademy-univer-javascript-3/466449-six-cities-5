import { createAction } from '@reduxjs/toolkit';
import { SortingOrder } from '../props/SortingOrder';
import { Offer } from '../props/Offers';
import { AuthorizationStatus } from '../props/Constants';
import { User } from '../props/User';

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: string) => ({
    payload: value,
  })
);

export const fillOrdersAction = createAction(
  'FILL_ORDERS',
  (value: Offer[]) => ({
    payload: value,
  })
);

export const setOrdersLoadingStatusAction = createAction(
  'SET_OFFERS_LOADING',
  (value: boolean) => ({
    payload: value,
  })
);

export const changeSortingOrderAction = createAction(
  'CHANGE_SORT_ORDER',
  (value: SortingOrder) => ({
    payload: value,
  })
);

export const changeAuthStatusAction = createAction(
  'CHANGE_AUTH_STATUS',
  (value: AuthorizationStatus) => ({
    payload: value,
  })
);

export const setUserAction = createAction(
  'SET_USER',
  (value: User) => ({
    payload: value,
  })
);
