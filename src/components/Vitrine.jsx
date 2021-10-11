import { React } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ProductCard from './ProductCard';

function Vitrine(props) {
  const { quantity } = props;
  if (parseInt(quantity, 10) === 5) {
    return (
      <ProductCard />
    );
  }
  if (parseInt(quantity, 10) === 10) {
    return (
      <Box>
        <ProductCard />
        <ProductCard />
      </Box>
    );
  }
  if (parseInt(quantity, 10) === 15) {
    return (
      <Box>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    );
  }
}

Vitrine.propTypes = {
  quantity: PropTypes.string.isRequired,
};

export default Vitrine;
