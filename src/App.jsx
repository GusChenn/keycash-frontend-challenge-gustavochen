import React from 'react';
import Box from '@mui/material/Box';
import Optionsbar from './components/Optionsbar';
import background from './resources/Background.png';
import './App.css';

const styles = {
  vitrineMoveis: {
    backgroundImage: `url(${background})`,
    backgrounSize: 'cover',
    padding: '0',
    margin: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
    overflow: 'hidden',
  },
};

function App() {
  return (
    <Box className="wrapper" style={styles.vitrineMoveis}>
      <Optionsbar />
    </Box>
  );
}

export default App;
