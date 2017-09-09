/*import React from 'react';
import PropTypes from 'prop-types';

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

export default BeerGrid;*/

// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import BeerItem from '../BeerItem/BeerItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function BeerGrid(props) {
  const classes = props.classes;
  const beers = props.beers;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {beers.map(beer =>
          <Grid item xs={3}>
            <BeerItem key={beer.id} beer={beer}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

BeerGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerGrid);