import type { FC } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components/macro';

import { ItemTypes } from './ItemTypes';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${props=>props.theme.color.gray400};
  padding: 15px;
  overflow: hidden;

  &:hover{
    cursor: pointer;
    background-color:${props=>props.theme.color.primary500};
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;


  svg {
    width: 60px;
    height: 60px;
  }
`;


export interface BoxProps {
  name: string;
  icon: React.ReactNode;
  element: React.ElementType;
}

interface DropResult {
  name: string;
  icon: React.ReactNode;
  element: React.ElementType;
}

export const Box: FC<BoxProps> = function Box({ name, icon, element }) {
  const [{ isDragging,handlerId }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  console.log({handlerId});
  
  return (
      <StyledContainer ref={drag} style={{ opacity }} data-testid={`box`}>
        <StyledIcon>{icon}</StyledIcon>
        <div className="typography">{name}</div>
      </StyledContainer>
  );
};
