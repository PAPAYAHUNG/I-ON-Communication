import React from 'react';
import styled from 'styled-components';
import useDnDService from '../../../../hooks/useDndService';
import { config } from './constant';
import ElementInput from './ElementInput';


const StyledContainer = styled.div``
const StyledElement = styled.div`
    
`

const StylingManager = () => {
 const {dndState} = useDnDService();
const {clickedItem} = dndState || {}
 console.log('ahihi',clickedItem);

 const renderParagraph = () =>{
   return config?.p.map((item,index)=>{
        return <StyledElement key={index}>
        <h1>{item.type}</h1>
        {
            item.concept.map((item2,index2)=>{
                return 'HIH'
            })
        }
        </StyledElement>
    })
 }
 
  return (
    <StyledContainer>
      StylingManager
     {renderParagraph()}
    </StyledContainer>
  );
};

export default StylingManager;
