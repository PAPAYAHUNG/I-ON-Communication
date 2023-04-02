import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div``


const ElementInput = () => {
    return (
      <StyledContainer>
          <label htmlFor="input">
              <input type="text" id='input' />
          </label>
      </StyledContainer>
    )
  }
  
  export default ElementInput
