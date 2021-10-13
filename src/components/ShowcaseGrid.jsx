/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

// Funcao que renderiza n cards
const fivePosArray = [1, 2, 3, 4, 5];
const tenPosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxPosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function ShowcaseGrid(props) {
  // Fetch dos dados dos imoveis no state 'data' quando a pagina eh renderizada
  const [dataIsLoaded, setLoaded] = useState(false);
  let data = [];
  useEffect(() => {
    fetch(
      'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge',
    )
      .then((res) => res.json())
      .then((json) => {
        data = json;
        setTimeout(() => { setLoaded(true); }, 500);
        // log para teste
        console.log(data);
      });
  }, []);
  const { quantity } = props;
  // Tela para quando as informações dos cards ainda não foram carregadas
  if (!dataIsLoaded) {
    return (
      <Typography
        sx={{
          width: '100%',
          height: '100vh',
          fontSize: {
            xs: '20px',
            sm: '20px',
            md: '50px',
            lg: '50px',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#dddfff',
        }}
      >
        Carregando...
      </Typography>
    );
  }
  if (dataIsLoaded && parseInt(quantity, 10) === 5) {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
        }}
      >
        {fivePosArray.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              <ProductCard />
            </Grid>
          );
        })}
      </Grid>
    );
  }
  if (parseInt(quantity, 10) === 10) {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
        }}
      >
        {tenPosArray.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
            >
              <ProductCard />
            </Grid>
          );
        })}
      </Grid>
    );
  }
  if (parseInt(quantity, 10) === 15) {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
        }}
      >
        {maxPosArray.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
            >
              <ProductCard />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

ShowcaseGrid.propTypes = {
  quantity: PropTypes.string.isRequired,
};
