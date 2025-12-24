// src/state/rootReducer.ts
import {
  combineReducers,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
export type AsyncReducers = {
  [key: string]: Reducer<any, AnyAction>;
};
export type ApiSliceType = {
  reducerPath: string;
  reducer: Reducer;
  middleware: any;
};
// Import your slices
// import {
//   mapReducer,
//   livePreviewReducer,
//   authReducer,
//   unitReducer,
//   usersApiSlice,
//   brandingApiSlice,
//   welcomeApiSlice,
//   wifiApiSlice,
//   liveTVApiSlice,
//   contactUsApiSlice,
//   homeApiSlice,
//   defaultPropertyApiSlice,
//   linkingTvApiSlice,
//   sidebarReducer,
//   livePreviewApiSlice,
//   personalizeReducer,
//   unitApiSlice,
//   linkingTvReducer,
//   integrationReducer,
//   integrationApiSlice,
//   informationApiSlice,
//   userApiSlice,
//   usersReducer,
//   serviceApiSlice,
//   paymentApiSlice,
//   paymentReducer,
// } from "../modules";


// Combine all static reducers
export const staticReducers = {
  // auth: authReducer,
  // map: mapReducer,
  // livePreview: livePreviewReducer,
  // sidebar: sidebarReducer,
  // personalize: personalizeReducer,
  // linkingTv: linkingTvReducer,
  // integration: integrationReducer,
  // unit: unitReducer,
  // users: usersReducer,
  // payment: paymentReducer,

  // // RTK Query API slices
  // [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  // [brandingApiSlice.reducerPath]: brandingApiSlice.reducer,
  // [welcomeApiSlice.reducerPath]: welcomeApiSlice.reducer,
  // [wifiApiSlice.reducerPath]: wifiApiSlice.reducer,
  // [liveTVApiSlice.reducerPath]: liveTVApiSlice.reducer,
  // [contactUsApiSlice.reducerPath]: contactUsApiSlice.reducer,
  // [homeApiSlice.reducerPath]: homeApiSlice.reducer,
  // [fileUploadApiSlice.reducerPath]: fileUploadApiSlice.reducer,
  // [defaultPropertyApiSlice.reducerPath]: defaultPropertyApiSlice.reducer,
  // [linkingTvApiSlice.reducerPath]: linkingTvApiSlice.reducer,
  // [livePreviewApiSlice.reducerPath]: livePreviewApiSlice.reducer,
  // [integrationApiSlice.reducerPath]: integrationApiSlice.reducer,
  // [informationApiSlice.reducerPath]: informationApiSlice.reducer,
  // [unitApiSlice.reducerPath]: unitApiSlice.reducer,
  // [userApiSlice.reducerPath]: userApiSlice.reducer,
  // [serviceApiSlice.reducerPath]: serviceApiSlice.reducer,
  // [paymentApiSlice.reducerPath]: paymentApiSlice.reducer,
};


export const rootReducer = combineReducers(staticReducers);


// Export API slices for middleware registration

export const apiSlices: ApiSliceType[] = [
];