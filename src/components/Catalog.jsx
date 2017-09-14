// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Item from './Item';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function Catalog(props) {
  const classes = props.classes;
  const beers = props.beers;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {beers.map(beer =>
          <Grid item xs={3}>
            <Item key={beer.id} beer={beer}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

Catalog.propTypes = {
  classes: PropTypes.object.isRequired,
  beer: PropTypes.object
};

export default withStyles(styles)(Catalog);