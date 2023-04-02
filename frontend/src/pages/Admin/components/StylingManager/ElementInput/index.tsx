import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div``;

const ElementInput = ({ type }: { type: string }) => {
  return (
    <StyledContainer>
      {type === 'Content' ? (
        <label htmlFor="input">
          <input type="text" id="input" placeholder="Please input content" />
        </label>
      ) : (
        <label htmlFor="input">
          <input type="number" id="input" placeholder="Please input in px" />
        </label>
      )}
    </StyledContainer>
  );
};

export default ElementInput;
