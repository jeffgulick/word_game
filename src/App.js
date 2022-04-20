import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TopNav from './Components/Top-Nav/index';
import Letters from './Components/Game-Surface/Letters/index';
import Keyboard from './Components/Game-Surface/KeyBoard/index';
import './App.css';

function App() {
  return (
    <>
      <div className='page'>
        <Stack spacing={2}>
          <Grid sx={{ height: '65px' }}>
            <TopNav />
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'green',
            }}
          >
            <Letters />
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'green',
            }}
          >
            <Keyboard />
          </Grid>
        </Stack>
      </div>
    </>
  );
}

export default App;
