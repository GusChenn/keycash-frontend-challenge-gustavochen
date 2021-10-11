import { React, useState } from 'react';
import {
  Toolbar,
  AppBar,
  Box,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import Vitrine from './ShowcaseGrid';

function Optionsbar() {
  const [state, setState] = useState({ quantity: '5' });
  const handleChange = (e) => {
    setState({ quantity: e.target.value });
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        sx={{
          bgcolor: '#E0E0E0',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              mr: 1,
            }}
          >
            Quantidade de itens por página:
          </Box>
          <FormControl variant="standard" sx={{ m: 1 }}>
            <Select
              labelId="cards-per-page-quantity"
              value={state.quantity}
              sx={{
                margin: '0',
                padding: '1px',
              }}
              onChange={handleChange}
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Vitrine quantity={state.quantity} />
    </Box>
  );
}

export default Optionsbar;
