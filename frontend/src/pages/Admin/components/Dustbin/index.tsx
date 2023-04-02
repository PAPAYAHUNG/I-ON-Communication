import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { useDragDropManager, useDragLayer, useDrop, XYCoord } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components/macro';
import useDnDService from '../../../../hooks/useDndService';
import { useMouseCoordinate } from '../../../../hooks/useMouseCoordinate';
import { transformType } from '../../../../utils/transformType';
import { ItemTypes } from '../Box/ItemTypes';
import Element from '../Element';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20px;
  position: relative;
`;

const StyledContainer = styled.div`
  position: fixed;
  left: 300px;
  right: 0;
  bottom: 0;
  height: 200px;
  display: flex;
  padding: 10px 20px;
  border-top: 1px solid ${(props) => props.theme.color.gray400};
`;

const StyledStatus = styled.div``;

const StyledTestZone = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface IElement {
  coordinate: { x: number; y: number };
  id: number;
  element: string;
}

export const Dustbin: FC = () => {

  const { dndState, setListItems } = useDnDService();
  const { listItems, counting } = dndState;

  const { coordinate, element } = listItems[listItems.length - 1] || {};
  console.log({ dndState });

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,

    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();

      if (item && offset) {
        setListItems({ coordinate: offset, element: item.name });
      }
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  console.log({ coordinate });
  console.log({ element });

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  const transformedList = (listItems as IElement[]).map(
    ({ coordinate, element, id }) => {
      return { coordinate, id, item: transformType(element), element };
    },
  );

  const renderClickedUi = () => {
    return transformedList.map(
      (item) => {
        return <Element {...item}/>
      },
    );
  };

  return (
    <StyledWrapper ref={drop} style={{ backgroundColor }} data-testid="dustbin">
      <StyledTestZone>{renderClickedUi()}</StyledTestZone>
      <StyledContainer>
        <StyledStatus>
          {isActive ? 'Release to drop' : 'Drag a box here'}
          <p>Mouse: ({coordinate && `${coordinate?.x}, ${coordinate?.y}`})</p>
          <p>Draging: {element}</p>
          <p>Instances: {counting}</p>
          <p>Config: {}</p>
        </StyledStatus>
      </StyledContainer>
    </StyledWrapper>
  );
};
