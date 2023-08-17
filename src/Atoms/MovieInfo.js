import React from 'react';
import styled from 'styled-components';
import { HandlePageRecord, HomePage, TmdbTypography } from '../Common/Const';
import CircularBackButton from './BackArrowBtn';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieInfoContaner = styled.div`
width: 632px;
height: 368px;
margin-left: 20px;
margin-top: 5px;
`
const LinkContainer  = styled(Link)`
position: relative;
margin-top: 201px;
float: right;
`
const MovieInfo = (props) => {
    const dispatch = useDispatch();
    const {title, overview, popularity, release_date,} = props.data ;
  return (
    <MovieInfoContaner>
       <TmdbTypography gutterBottom variant="h5" component="h5">
         {title}({popularity})
       </TmdbTypography>
       <TmdbTypography variant="body1" color="text.secondary">
         {release_date} | Length | Director
       </TmdbTypography>
       <TmdbTypography variant="body1" color="text.secondary">
        Description : {overview}
       </TmdbTypography>
       <LinkContainer to={"/"} onClick={() => HandlePageRecord(HomePage,dispatch)}>
         <CircularBackButton/>
       </LinkContainer>
    </MovieInfoContaner>
  )
}

export default MovieInfo
