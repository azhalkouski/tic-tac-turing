import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => props.isOpen ? `${props.width}px` : 'none'};
  transition: margin .2s;
`;

export const NavToggleButton = ({ isOpen, width, onClick }) => (
  <StayVisible
    isOpen={isOpen}
    width={width}
  >
    <FloatingActionButton color="primary" aria-label="Add" onClick={onClick}>
      <MenuIcon />
    </FloatingActionButton>
  </StayVisible>
);
