import { React } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function Vitrine(props) {
  const { quantity } = props;
  if (quantity === 5) {
    return (
      <ProductCard />
    );
  }
  if (quantity === 10) {
    return (
      <ProductCard />
    );
  }
  if (quantity === 15) {
    return (
      <ProductCard />
    );
  }
}

Vitrine.propTypes = {
  quantity: PropTypes.string.isRequired,
};

export default Vitrine;
