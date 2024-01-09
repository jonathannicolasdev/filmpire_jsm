import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
// eslint-disable-next-line import/no-cycle
import { Movie } from '..';

const MovieList = ({ movies }) => {
  console.log('movie list');
  const classes = useStyles();
  console.log(movies);

  return (
    <Grid container className={classes.moviesContainer}>
      { movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;

