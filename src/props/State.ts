﻿﻿import { store } from '../store/Index';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
