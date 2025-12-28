import type { ThemeOptions } from '@mui/material/styles';

declare global {
  interface Window {
    __themeConfig?: ThemeOptions;
  }
}

export {};
