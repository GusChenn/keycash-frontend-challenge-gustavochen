import React from 'react';
import Box from '@mui/material/Box';
import Card from './Card';

function Vitrine() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 0',
        padding: '0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '15px',
          boxShadow: 1,
          margin: '10px',
          width: '60%',
          height: '70%',
          padding: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
}

export default Vitrine;
