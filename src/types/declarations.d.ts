declare module 'auth/LoginPage';
declare module 'auth/authReducer' {
  const reducer: import('redux').Reducer;
  export default reducer;
}
declare module 'auth/authApiSlice';
declare const module: {
  hot?: {
    accept: (deps?: string | string[], callback?: () => void) => void;
    dispose?: (callback: () => void) => void;
  };
};
