import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { store } from "@/state/store";
import { createAppTheme } from "@/theme/createAppTheme";
import App from "@/App";

async function loadTenantConfig() {
  // Later: fetch from API/CDN
  return {
    primaryColor: "#1976d2",
    secondaryColor: "#ff4081",
    borderRadius: 8
  };
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

(async () => {
  const tenantConfig = await loadTenantConfig();
  const theme = createAppTheme(tenantConfig);

  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
})();