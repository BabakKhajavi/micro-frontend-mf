import { ThemeOptions } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface WhiteLabelState {
  globalTheme: ThemeOptions | undefined;
}
const initialState: WhiteLabelState = {
  globalTheme: window.__themeConfig,
};

export const whiteLabelSlice = createSlice({
  name: 'whiteLabel',
  initialState,
  reducers: {
    updateGlobalTheme: (
      state,
      action: PayloadAction<{ globalTheme: ThemeOptions | undefined }>,
    ) => {
      state.globalTheme = action.payload.globalTheme as any;
    },
  },
});
export const { updateGlobalTheme } = whiteLabelSlice.actions;
const whiteLabelReducer = whiteLabelSlice.reducer;
export default whiteLabelReducer;
