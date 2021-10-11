import React from 'react';
import Box from '@mui/material/Box';
import Options from './components/Options';
import background from './resources/Background.png';
import './VirtualShowcase.css';

const styles = {
  virtualShowcase: {
    backgroundImage: `url(${background})`,
    backgrounSize: 'auto cover',
    padding: '0',
    margin: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
    overflow: 'scroll',
  },
};

export default function VirtualShowcase() {
  return (
    <Box className="wrapper" style={styles.virtualShowcase}>
      <Options />
    </Box>
  );
}
