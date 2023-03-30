import React, { useMemo } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  gap: 20px;
  /* box-shadow: 5px  2px ${(props) => props.theme.color.gray400}; ; */
`;

const StyledItem = styled.div`
  display: flex;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.primary300};
  ${(props) => props.theme.typo.family.inter};
  ${(props) => props.theme.typo.style.l2Header};

  &:hover{
    cursor: pointer;
    background-color: ${(props) => props.theme.color.primary500};
  }
  
`;

const navigators = [
  {
    text: 'Save',
    url: '',
  },
  {
    text: 'Undo',
    url: '',
  },
  {
    text: 'Redo',
    url: '',
    action: () => {},
  },
  {
    text: 'Export',
    url: '',
    action: () => {},
  },
  {
    text: 'Import',
    url: '',
    action: () => {},
  },
  {
    text: 'Views',
    url: '',
    action: () => {},
  },
];

const TopNavigation = () => {

  const renderItems = useMemo(
    () =>
      navigators.map((navigator, index) => (
        <StyledItem key={index}>{navigator.text}</StyledItem>
      )),
    [],
  );
  return <StyledWrapper>{renderItems}</StyledWrapper>;
};

export default TopNavigation;
