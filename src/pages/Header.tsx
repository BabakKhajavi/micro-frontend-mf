import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeOptions } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { updateGlobalTheme } from '@/state/white-label-reducer';

type ThemeHeaderProps = {
  /** Currently selected theme key (e.g. 'localhost:9000') */
  currentThemeKey: string;
  /**
   * Optional callback to let the app update the ThemeProvider
   * after window.__themeConfig is changed.
   */
  onThemeConfigChange?: (config: ThemeOptions, key: string) => void;
};

/**
 * Header with a theme selector.
 * Themes are fetched from S3:
 *   https://branding-configs.s3.us-east-1.amazonaws.com/<encodeURIComponent(key)>.json
 */
export const ThemeHeader: React.FC<ThemeHeaderProps> = ({
  currentThemeKey,
  onThemeConfigChange,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(currentThemeKey);
  const [loading, setLoading] = React.useState(false);

  // TODO: replace with your real theme keys
  const availableThemes = [
    { label: 'Local Host', value: 'localhost:9000' },
    { label: 'CICD Bank', value: 'cicd' },
    { label: 'RBC Royal Bank', value: 'rbcroyalbank' },
    { label: 'TD Bank', value: 'td' },
  ];

  const handleChange = async (event: SelectChangeEvent<string>) => {
    const newKey = event.target.value;
    setValue(newKey);
    setLoading(true);

    try {
      const safeKey = encodeURIComponent(newKey);
      const BUCKET_BASE = 'https://branding-configs.s3.us-east-1.amazonaws.com';
      const url = `${BUCKET_BASE}/${safeKey}.json`;

      const res = await fetch(url);
      if (!res.ok) {
        console.error('Failed to fetch theme from S3:', url, res.status);
        return;
      }

      const config = (await res.json()) as ThemeOptions;

      // Update global config so bootstrap logic is consistent
      window.__themeConfig = config;
      dispatch(updateGlobalTheme({ globalTheme: config }));
      // Let parent update MUI ThemeProvider if desired
      onThemeConfigChange?.(config, newKey);
    } catch (err) {
      console.error('Error fetching theme from S3:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Micro Frontend Host
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {loading && <CircularProgress size={20} color="inherit" />}

          <Select<string>
            value={value}
            onChange={handleChange}
            size="small"
            sx={{
              color: 'inherit',
              borderColor: 'inherit',
              minWidth: 200,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.7)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '& .MuiSvgIcon-root': {
                color: 'inherit',
              },
            }}
          >
            {availableThemes.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
