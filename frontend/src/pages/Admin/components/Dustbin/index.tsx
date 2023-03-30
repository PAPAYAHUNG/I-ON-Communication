import { FC, useEffect, useRef, useState } from 'react';
import { useDragDropManager, useDragLayer, useDrop, XYCoord } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import useDnDService from '../../../../hooks/useDndService';
import { useMouseCoordinate } from '../../../../hooks/useMouseCoordinate';
import { ItemTypes } from '../Box/ItemTypes';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 20px;
  position: relative;
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledStatus = styled.div``;

const StyledTestZone = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

interface DropResult {
  name: string;
  icon: React.ReactNode;
  element: React.ElementType;
}

export const Dustbin: FC = () => {
//   const [coordinate, setCoordinate] = useState<XYCoord | null>(null);
//   const [element, setElement] = useState<string>('div');
//   const [counting, setCounting] = useState(0);
//   const [listConfig, setListConfig] = useState<any>([]);

  const { dndState, setListItems } = useDnDService();
  const {listItems,counting} = dndState

  
  const {coordinate, element}  = listItems[listItems.length-1] || {}
  console.log({ dndState });

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,

    drop: (item: any, monitor) => {
      const offset = monitor.getSourceClientOffset();

      if (item && offset) {
        // setElement(item.name);
        // setCounting((prev) => prev + 1);
        // setCoordinate(offset);
        // console.log('itemmmmm', item.name);
   
        // if(coordinate && element)
        setListItems({ coordinate:offset, element:item.name })
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

  return (
    <StyledWrapper
      ref={drop}
      style={{ backgroundColor }}
      data-testid="dustbin"
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
      <StyledContainer>
        <StyledStatus>
          <p>
            Mouse: ({coordinate && `${coordinate?.x}, ${coordinate?.y}`})
          </p>
          <p>Draging: {element}</p>
          <p>Instances: {counting}</p>
          <p>Config: {}</p>
        </StyledStatus>
        <StyledTestZone>alooo</StyledTestZone>
      </StyledContainer>
    </StyledWrapper>
  );
};
