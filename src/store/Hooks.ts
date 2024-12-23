﻿﻿import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../props/State';

export const useAppSelector = <T>(callback: (state: State) => T) =>
  useSelector<State, T>(callback);
export const useAppDispatch = () => useDispatch<AppDispatch>();
