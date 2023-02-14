const { createTheme } = require("@mui/material");

export const theme = createTheme({
    palette: {
        primary: {
            main: "#474a3d"
        },
        secondary:{ 
            main: "#b7b7a4"
        },
        font: {
            // accent: "#3c3226",
            accent: "#2c2925",
        },
        paper: "#fff9",
        mainBg: "#ffe8d6",
        header: "#cb997e",
    },
    typography: {
        mainTitle: {
            fontWeight: 500,
            fontSize: '3.8rem',
            lineHeight: 1,
            letterSpacing: '0.2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        subTitle: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.5,
            textAlign: 'center',
            color: '#3c3226',
        },
    },
    shape: {
        borderRadius: 4,
    }
});

// #e6ccb2
// #ddb892
// green #7b876d
// light green #989e8b
// body #ffe8d6