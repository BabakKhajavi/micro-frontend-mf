// src/state/rootReducer.ts
import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
export type AsyncReducers = {
  [key: string]: Reducer<any, AnyAction>;
};
export type ApiSliceType = {
  reducerPath: string;
  reducer: Reducer;
  middleware: any;
};

import whiteLabelReducer from './white-label-reducer';

export const staticReducers = {
  whiteLabelReducer: whiteLabelReducer,
};

export const rootReducer = combineReducers(staticReducers);

export const apiSlices: ApiSliceType[] = [];
