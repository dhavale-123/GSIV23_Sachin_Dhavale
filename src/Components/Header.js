import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Home } from '@mui/icons-material';
import {IconButton } from '@mui/material';
import SearchFilter from '../Atoms/SearchFilter';
import { useDispatch } from 'react-redux';
import { fetchData } from '../Redux/ReduxSlices/MovieSlice';
import { useSelector } from 'react-redux';
import { HomePage } from '../Common/Const';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index:1000;
`;
const TitleContainer = styled.div`
  height:35px;
  width:600px;
  display: flex;
  align-items: center;
`
const HederTitle = styled.p`
  font-size:18px;
  font-size: 18px;
  font-weight: 600;
  color: #4A4A4A;
`

const Header = ({isHomePage}) => {
  const [searchValue , setSearchValue] = useState(null);
  const dispatch = useDispatch();
  console.log("searchValue",searchValue)
  useEffect(()=>{
    dispatch(fetchData(searchValue))
  },[searchValue,dispatch]);

  const {pageRecord} = useSelector((state) => state.MoviesData);
  console.log("pageRecord",pageRecord);

  return (
    <HeaderContainer>
      <TitleContainer>
        {
            (pageRecord === HomePage) ? <SearchFilter searchValue={searchValue} setSearchValue={setSearchValue}/> : <HederTitle>Movie Details</HederTitle>
        }
      </TitleContainer>
      <IconButton>
        <Home/>
      </IconButton>
    </HeaderContainer>
  );
};

export default Header;