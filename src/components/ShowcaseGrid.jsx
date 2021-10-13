import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

export default function ShowcaseGrid(props) {
  /*
  Fetch dos dados dos imoveis no state 'data' quando a pagina eh renderizada
  */
  const [data, setData] = useState();
  const [dataIsLoaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(
      'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge',
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoaded(true);
      });
  }, []);
  console.log(data);
  const { quantity } = props;
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
        {data.map((item) => (
          <ProductCard
            id={item.id}
            address={item.address}
            image={item.images}
            price={item.price}
            bathrooms={item.bathrooms}
            bedrooms={item.bedrooms}
            parkingSpaces={item.parkingSpaces}
            usableArea={item.usableArea}
            publish={item.publish}
          />
        ))}
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
