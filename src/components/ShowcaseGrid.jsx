import { React } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';

export default function ShowcaseGrid(props) {
  const { quantity } = props;
  if (parseInt(quantity, 10) === 5) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ProductCard />
      </Box>
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
