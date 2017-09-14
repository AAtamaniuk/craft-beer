// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 300
  },
  media: {
    height: 250,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
};

function Item({classes, beer}) {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={beer.image_url}
          title={beer.name}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {beer.name}
          </Typography>
          <Typography component="p">
            {beer.tagline}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="accent">
            More...
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  beer: PropTypes.object
};

export default withStyles(styles)(Item);

