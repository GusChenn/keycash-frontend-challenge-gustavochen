import { React } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';

export default function ShowcaseGrid(props) {
  let data = [];
  fetch(
    'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge')
    .then((res) => res.json())
    .then((json) => {
      data = json,
    });
  const { quantity } = props;
  if (parseInt(quantity, 10) === 5) {
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
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <ProductCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <ProductCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <ProductCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <ProductCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <ProductCard />
        </Grid>
      </Grid>
    );
  }
  if (parseInt(quantity, 10) === 10) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ProductCard />
        <ProductCard />
      </Box>
    );
  }
  if (parseInt(quantity, 10) === 15) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    );
  }
}

ShowcaseGrid.propTypes = {
  quantity: PropTypes.string.isRequired,
};
