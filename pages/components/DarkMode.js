import React from 'react'
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import {ListItemButton, ListItemIcon, ListItemText, ListSubheader, List, Divider} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../_app';
export default function DarkMode() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    // console.log(colorMode);
    return (
      <ListItemButton
        sx={{
          right: 8,
          alignItems: 'center',
          justifyContent: 'left',
          bgcolor: 'background.default',
          color: 'text.primary',
        }} onClick={colorMode.toggleColorMode} color="inherit"
      >
        <ListItemIcon sx={{ ml: 1 }}  color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </ListItemIcon>
        <ListItemText
        primary={theme.palette.mode =='dark'? 'Light Mode': 'Dark Mode'}
        />
      </ListItemButton>
    );
  }