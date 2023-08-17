import React from 'react';
import styled from 'styled-components';
import ImageCardBox from '../Atoms/ImageCardBox';
import MovieInfo from '../Atoms/MovieInfo';


const PosterDetailContainer = styled.div`
width: 968px;
height: 382px;
display:flex;
`

const PosterWithInfo = ({data}) => {
  return (
    <PosterDetailContainer>
      <ImageCardBox poster={data.poster_path}/>
      <MovieInfo data={data}/>
    </PosterDetailContainer>
  )
}

export default PosterWithInfo