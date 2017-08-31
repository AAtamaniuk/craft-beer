import React from 'react';
import PropTypes from 'prop-types';
import './BeerItem.css'

const BeerItem = ({beer}) => {
  return (
    <div className="BeerItem">
      <div className="BeerItem__wrapper">
        <img
          className="BeerItem__img"
          src={beer.image_url}
          alt={beer.name}
        />
      </div>
      <span>{beer.name}</span>

    </div>
  );
};

BeerItem.propTypes = {};
BeerItem.defaultProps = {};

export default BeerItem;
