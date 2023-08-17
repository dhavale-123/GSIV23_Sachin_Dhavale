import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { TmdbTypography } from '../Common/Const';
import { CardActionArea} from '@mui/material';
import styled from 'styled-components';

const CardContaner = styled(Card)`
max-width: 324px;
width: 314px;
height: 550px;
border:1px soild #9B9B9B;
border-radius: 17px !important;
box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1) !important;
`
const ActionArea = styled(CardActionArea)`

`
const CardContentStore = styled(CardContent)`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
const ImageContainer = styled.div`
 height:312px;
`
const CardMediaContainer = styled(CardMedia)`
height: 312px;
width: 267px;
display: inline-block;
`


export default function MovieCard({poster, title, description}) {

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  const lines = description.split(' ');
  const splicedDescription = lines.splice(0, 20).join(' ');
  return (
    <CardContaner>
      <ActionArea>
        <ImageContainer>
          <CardMediaContainer
            component="img"
            image={getImage(poster)}
            alt="Loading..."
          />
        </ImageContainer>
        <CardContentStore>
          <TmdbTypography gutterBottom variant="h5" component="div">
            {title}
          </TmdbTypography>
          <TmdbTypography variant="body2" color="text.secondary">
            {splicedDescription}
          </TmdbTypography>
        </CardContentStore>
      </ActionArea>
    </CardContaner>
  );
}