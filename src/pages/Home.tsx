import { extendedStore } from '@/state/store';
import React, { useEffect } from 'react';
import { ThemeHeader } from './Header';
const LoginPage = React.lazy(() => import('auth/LoginPage'));

export default function HomePage() {
  useEffect(() => {
    import('auth/authReducer').then((mod) => {
      extendedStore.injectReducer('auth', mod.default);
    });
    import('auth/authApiSlice').then((mod) => {
      extendedStore.injectApiSlice(mod.authApi || mod.default);
    });
  }, []);
  return (
    <div>
      <React.Suspense fallback={<div>Loading Login Page...</div>}>
        <ThemeHeader currentThemeKey="localhost:9000" />
        <h2>Host Home Page 12</h2>
        <LoginPage />
      </React.Suspense>
    </div>
  );
}
