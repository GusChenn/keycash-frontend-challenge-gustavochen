import React from 'react';
import Box from '@mui/material/Box';

function Card() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '7px',
        boxShadow: 1,
        margin: '7px',
        padding: '5px ',
        backgroundImage: 'linear-gradient(to right, #FF0094, #F1008C)',
        width: '15%',
        overflow: 'hidden',
      }}
    >
      <Box
        className="imagem_casa"
      >
        <a href="https://placeholder.com">
          <img src="https://via.placeholder.com/300" alt="Imagem imóvel" />
        </a>
      </Box>
    </Box>
  );
}

export default Card;
