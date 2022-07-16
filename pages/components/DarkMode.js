// import React, { useState, useEffect } from 'react';
// import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
// import { IconButton } from '@mui/material';
// import Switch from '@mui/material';
// import { ColorModeContext } from '../_app';

// export default function DarkMode() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   const [switchState, setSwitchState] = useState(false);
//   const [darkState, setDarkState] = useState('light');
  

//   useEffect(() => {
//     const existingPreference = localStorage.getItem('darkState');
//     if (existingPreference) {
//       existingPreference === 'light'
//         ? setDarkState('light')
//         : setDarkState('dark');
//     } else {
//       setDarkState('light');
//       localStorage.setItem('darkState', 'light');
//     }
//   }, []);

 

//   const handleThemeChange = () => {
//     setSwitchState(switchState === true ? false : true);
//     if (darkState === 'light') {
//       setDarkState('dark');
//       colorMode.toggleColorMode
//       localStorage.setItem('darkState', 'dark');
//     } else {
//       setDarkState('light');
//       colorMode.toggleColorMode
//       localStorage.setItem('darkState', 'light');
//     }
//   };

//   return (
//     <>
//       selected Palette: {darkState}; <br />
      
//         <IconButton />
//         <Switch
//           checked={switchState}
//           onChange={handleThemeChange}
//         />
//     </>
//   );
// };
import React,{useState, useEffect} from 'react'
import {IconButton, Switch, ListItemButton, ListItemIcon, ListItemText, ListSubheader, List, Divider} from '@mui/material';
import {useTheme} from 'next-themes';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function DarkMode() {
    const {theme, resolvedTheme, setTheme} = useTheme();
    // console.log(colorMode);

    // To avoid hydration mismatch error
    const [mounted, setMounted] = useState(false)
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])  
    if (!mounted) return null
  
    return (
      <>
     <ListItemButton
        sx={{
          right: 8,
          alignItems: 'center',
          justifyContent: 'left',
          bgcolor: 'background.default',
          color: 'text.primary',
        }} onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")} color="inherit"
      >
        <ListItemIcon sx={{ ml: 1 }}  color="inherit">
          {resolvedTheme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </ListItemIcon>
        <ListItemText
        primary={resolvedTheme =='light'? 'Light Mode': 'Dark Mode'}
        />
      </ListItemButton>
      </>
    );
  }