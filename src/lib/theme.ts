import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#512DA8",
      light: "#4527A0",
      dark: "#311B92",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1976D2",
      light: "#1565C0",
      dark: "#0D47A1",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#29B6F6",
      light: "#03A9F4",
      dark: "#039BE5",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#388E3C",
      light: "#2E7D32",
      dark: "#1B5E20",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FF8F00",
      light: "#FFC400",
      dark: "#FFAB00",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
      light: "#C62828",
      dark: "#B71C1C",
      contrastText: "#FFFFFF",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
  },
});

export default theme;
