import { createTheme } from "@mui/material";

interface TenantConfig {
    primaryColor?: string;
    secondaryColor?: string;
    borderRadius?: number;
}

export function createAppTheme(tenantConfig: TenantConfig) {
    return createTheme({
        palette: {
            primary: { main: tenantConfig.primaryColor || "#1976d2" },
            secondary: { main: tenantConfig.secondaryColor || "#ff4081" }
        },
        shape: {
            borderRadius: tenantConfig.borderRadius || 8
        }
    });
}