import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { extendedStore } from '@/state/store';
import App from '@/App';
import { AppThemeProvider } from './providers/theme-provider';

const root = ReactDOM.createRoot(document.getElementById('host-root')!);

const Root: React.FC = () => {
  return (
    <Provider store={extendedStore}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Provider>
  );
};

root.render(<Root />);
