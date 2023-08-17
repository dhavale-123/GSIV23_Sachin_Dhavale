import React, { useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { fetchMovieDetails, removefetchAsyncCardDetails } from '../Redux/ReduxSlices/MovieSlice';
import {useParams} from 'react-router-dom';
import PosterWithInfo from '../Components/PosterWithInfo';
import { ScrollContainer } from '../Common/Const';

function MovieDetails() {
 const params = useParams();
 const dispatch = useDispatch();
 const data = useSelector((state) => state.MoviesData.detailCard);
 const ID = params.movieId ;
  useEffect(()=>{
      dispatch(fetchMovieDetails(ID));
      return () => {
        dispatch(removefetchAsyncCardDetails());
      }
  },[dispatch,ID]);
  return (
    <ScrollContainer>
      {Object.keys(data).length === 0 ? (
        <div>...loading</div>
      ):(
      <PosterWithInfo data={data}/>
      )}
    </ScrollContainer>
  )
}

export default MovieDetails
