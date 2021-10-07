import React from 'react';
import {
  Toolbar,
  AppBar,
  Box,
} from '@mui/material';

function Tools() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        sx={{
          bgcolor: '#373737',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box>
            Quantidade de itens por página:
          </Box>
          <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Tools;
