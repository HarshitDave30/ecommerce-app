import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: "'Montserrat', 'sans-serif'",
        fontWeightBold: 700,
        h1 : {
            fontWeight: 700
        },
        h2 : {
            fontWeight: 700
        },
        h3 : {
            fontWeight: 700
        },
        h4 : {
            fontWeight: 700
        },
        h5 : {
            fontWeight: 700
        },
        h6 : {
            fontWeight: 500
        }
    },
    palette: {
        primary: {
            main: '#D51815',
        },
        secondary: {
            main: '#080A0D'
        },
        white: {
            main: '#FFFFFF'
        }
    },
});