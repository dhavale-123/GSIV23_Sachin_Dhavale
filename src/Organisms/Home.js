import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../Common/Const';
import { fetchData } from '../Redux/ReduxSlices/MovieSlice';
import MovieList from '../Components/MovieList';
import { ScrollContainer } from '../Common/Const';

function Home() {
  const {status:result, movies} = useSelector((state) => state.MoviesData);
  const dispatch = useDispatch();
  const defaultSearchValue = "popular"
  useEffect(() => {
    dispatch(fetchData(defaultSearchValue));
  },[dispatch]);

  if(result === STATUSES.LOADING ){
    return <div>...loading page please wait</div>
  }
  else if(result === STATUSES.ERROR){
    return <div>Page not found 404 error</div>
  }
  else{
    return (
      <ScrollContainer>
        {movies && <MovieList movies={movies.results}/>}
      </ScrollContainer>
    )
  }
}

export default Home;