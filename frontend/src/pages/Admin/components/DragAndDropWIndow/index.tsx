import React, { memo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Dustbin } from '../Dustbin';
import { Box } from '../Box';
import styled from 'styled-components/macro';
import Sidebar from './Sidebar';

const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  .sidebar {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  .main-zone {
    flex-grow: 1;
  }
`;

const DragAndDropWindow = () => {
  return (
    <StyledContainer>
      <DndProvider backend={HTML5Backend}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-zone">
          <Dustbin />
        </div>
      </DndProvider>
    </StyledContainer>
  );
};

export default memo(DragAndDropWindow);
