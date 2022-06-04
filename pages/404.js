import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  return (
    <Grid container spacing={2}>
        <Grid item mt={5} xs={12} md={12} lg={12}>
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gap: 2,
                height: 500,
              }}
            >
                <Paper elevation={12}>
                  <Typography variant="h4" align="center" component="div" gutterBottom mt={14}>
                         Error Page Not Found
                  </Typography>
                  <div sx={{ align: 'center'}}>
                  <iframe src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn" width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                  </div>

                </Paper>

            </Box>
          </ThemeProvider>
        </Grid>
    </Grid>
  );
}
