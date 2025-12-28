import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

export type TenantThemeConfig = ThemeOptions;

export function createAppTheme(tenantConfig: TenantThemeConfig): Theme {
  return createTheme({
    ...tenantConfig,
  });
}
