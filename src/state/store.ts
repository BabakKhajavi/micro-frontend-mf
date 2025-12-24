// src/state/store.ts
import {
  configureStore,
  combineReducers,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";

import { staticReducers, apiSlices } from "./root-reducer";

// 1. Type for async reducers
export type AsyncReducers = {
  [key: string]: Reducer<any, AnyAction>;
};

// 2. Type for RTK Query slices
export type ApiSliceType = {
  reducerPath: string;
  reducer: Reducer;
  middleware: any;
};

// 3. Create reducer factory
export const createReducer = (asyncReducers: AsyncReducers = {}) =>
  combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });

// 4. Create the store
export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...apiSlices.map((api) => api.middleware)
    ),
});

// 5. Extend the store type to include asyncReducers + injectReducer
export type ExtendedStore = typeof store & {
  asyncReducers: AsyncReducers;
  injectReducer: (key: string, reducer: Reducer) => void;
};

// 6. Cast store to ExtendedStore
(store as ExtendedStore).asyncReducers = {};

(store as ExtendedStore).injectReducer = (key: string, reducer: Reducer) => {
  const extended = store as ExtendedStore;

  if (!extended.asyncReducers[key]) {
    extended.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(extended.asyncReducers));
  }
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the extended store
export const extendedStore = store as ExtendedStore;