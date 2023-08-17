import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

const CardContaner = styled(Card)`
max-width: 324px;
width: 290px;
margin-left: 10px;
height: 376px;
border:1px soild #9B9B9B;
border-radius: 17px !important;
box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1) !important;
`
const ImageContainer = styled.div`
 height:312px;
`
const CardMediaContainer = styled(CardMedia)`
display: inline-block;
`
export default function ImageCardBox({poster}) {

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  return (
    <CardContaner>
        <ImageContainer>
          <CardMediaContainer
            component="img"
            image={getImage(poster)}
            alt="Loading..."
          />
        </ImageContainer>
    </CardContaner>
  );
}