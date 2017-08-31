import React from 'react';
import PropTypes from 'prop-types';
import './BeerGrid.css';

import BeerItem from '../BeerItem/BeerItem'

const BeerGrid = ({beers}) => {
  return (
    <div className="BeerGrid">
      {beers.map(beer => <BeerItem key={beer.id} beer={beer}/>)}
    </div>
  );
};

BeerGrid.propTypes = {};
BeerGrid.defaultProps = {};

export default BeerGrid;
