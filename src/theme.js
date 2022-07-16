import { PaletteOptions, createTheme, css } from "@mui/material/styles";


export const lightTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    graph: {main: "green"},
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    graph: {main: "white"},
    mode: "dark",
  },
});

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;

// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// // Create a theme instance.
// export const lightTheme = createTheme({
//   palette: {
//     primary: {main: '#556cd6',},
//     secondary: {main: '#19857b',},
//     mode: "light",
//     error: {main: red.A400,},
//   },
// });

// export const darkTheme = createTheme({
//   palette: {
//     primary: {main: '#556cd6',},
//     secondary: {main: '#19857b',},
//     mode: "dark",
//     error: {main: red.A400,},
//   },
// });

// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// export default theme;
