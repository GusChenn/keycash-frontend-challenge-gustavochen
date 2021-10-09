import { React, useState } from 'react';
import {
  Toolbar,
  AppBar,
  Box,
} from '@mui/material';
import Vitrine from './Vitrine';

function Optionsbar() {
  const [quantity, setQuantity] = useState(5);
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
          <select
            onChange={(e) => {
              setQuantity(e.target.value);
              console.log(quantity);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </Toolbar>
      </AppBar>
      <Vitrine quantity={this.quantity} />
    </Box>
  );
}

export default Optionsbar;
