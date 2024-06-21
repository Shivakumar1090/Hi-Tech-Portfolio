import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    letterSpacing: 1.2,
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#e23339",
        },
        secondary: {
            main: "#0e0e0e",
        },
    },
    typography: {
        fontFamily: "Inter",
        Headings: {
            fontFamily: 'Oswald',
            fontWeight: 700,
        },
        // allVariants: {
        //     color: "#0e0e0e",
        // },
    },
});

export default theme;