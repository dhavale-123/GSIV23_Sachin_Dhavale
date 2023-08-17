import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const movingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledIconButton = styled(IconButton)`
 border-radius: 50%;
 width: 50px;
 height: 50px;
 position: relative;
 animation: ${movingAnimation} 2s infinite;
`;

const CircularBackButton = () => {
  return (
    <StyledIconButton variant="contained" color="primary">
      <ArrowBack/>
    </StyledIconButton>
  );
};

export default CircularBackButton;