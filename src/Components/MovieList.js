import React from 'react';
import styled from 'styled-components';
import MovieCard from '../Molecules/MovieCard';
import { Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import { HandlePageRecord, MovieDetailPage } from '../Common/Const';
import { useDispatch } from 'react-redux';
const MovieListContainer = styled(Grid)`
`;

const LinkTap = styled(Link)`
 text-decoration:none;
`

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  return (
    <MovieListContainer container spacing={3}>
      {movies && movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <LinkTap to={`/movies/${movie.id}`} onClick={() => HandlePageRecord(MovieDetailPage,dispatch)}>
            <MovieCard poster={movie.poster_path} title={movie.title} description={movie.overview} id={movie.id}/>
          </LinkTap>
        </Grid>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;