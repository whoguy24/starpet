import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
        text: {
            primary: "#404040",
            secondary: "#606060",
            disabled: "#808080",
        },
        primary: {
            main: "#05588B",
            light: "#086ead",
            dark: "#064c78ff",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#c6edffff",
            light: "#e3f6ffff",
            dark: "#56b0ddff",
            contrastText: "#05588B",
        },
    },
    typography: {
        fontFamily: "Roboto, Inter, Helvetica, Arial, sans-serif",
        h1: { fontSize: "3rem", fontWeight: 700, lineHeight: 1.2 },
        h2: { fontSize: "2.25rem", fontWeight: 700 },
        h3: { fontSize: "2rem", fontWeight: 700 },
        h4: { fontSize: "1.75rem", fontWeight: 700 },
        h5: { fontSize: "1.5rem", fontWeight: 700 },
        h6: { fontSize: "1.25rem", fontWeight: 700 },
        subtitle1: { fontSize: "1rem", fontWeight: 400 },
        subtitle2: { fontSize: "0.875rem", fontWeight: 400 },
        body1: { fontSize: "1rem", fontWeight: 400 },
        body2: { fontSize: "0.875rem", fontWeight: 400 },
        button: { fontSize: "0.875rem", fontWeight: 500 },
        caption: { fontSize: "0.75rem", fontWeight: 400 },
        overline: { fontSize: "0.75rem", fontWeight: 700 },
    },
});
