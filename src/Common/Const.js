import styled from "styled-components";
import { Container, Typography} from '@mui/material';
import { setPageRecord } from '../Redux/ReduxSlices/MovieSlice';

export const STATUSES = Object.freeze({
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading"
 });

 export const api_key = "fd0430f22b1d527dad9080d8b6b27c9b";

 export const ScrollContainer = styled(Container)`
  max-height:100%;
  min-height:630px;
  width: 100%;
  max-width:100%!important;
  border: 1px solid #ddd;
  padding-top:5px;
  z-index:999;
`;

 export const TmdbTypography = styled(Typography)`
  text-align:left;
`
 export const HomePage = "homePage";
 export const MovieDetailPage = "movieDetail";

 export const HandlePageRecord = (value, dispatch) => {
    dispatch(setPageRecord(value));
  };