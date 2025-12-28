import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { createAppTheme } from '@/theme/createAppTheme';

type Props = {
  children: React.ReactNode;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const globalThemeConfig = useSelector(
    (state: any) =>
      state.whiteLabelReducer.globalTheme as ThemeOptions | undefined,
  );

  const theme = React.useMemo(
    () => createAppTheme(globalThemeConfig ?? {}),
    [globalThemeConfig],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
