import React, { useState } from "react";
import styled from "styled-components";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 512px;
  background-color: lightgrey;
  border-radius: 4px;
  padding:2px;
`;

const SearchInput = styled(InputBase)`
  flex: 1;
  margin-left:8px;
`;

const SearchFilter = ({iconColor,setSearchValue,searchValue}) => {
  const [inputValue , setInputValue] = useState("");
   const submitValue = () => {
     inputValue && setSearchValue(inputValue);
     setInputValue("");
   }
  return (
    <FilterContainer>
      <SearchIcon onClick={submitValue} sx={{ color: `${iconColor ? iconColor : "#9B9B9B"}` }}/>
      <SearchInput placeholder="Search" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} sx={{fontWeight:600, color:'#4A4A4A'}} />
    </FilterContainer>
  );
};

export default SearchFilter;