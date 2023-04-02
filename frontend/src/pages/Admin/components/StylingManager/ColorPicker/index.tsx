import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components/macro';


const StyledSketchEditor = styled(SketchPicker)`
  padding: 0px !important;

  .sketch-picker{
    padding:unset;
  }
`;

const ColorPicker = () => {
  const [background, setBackground] = useState<any>({color: '#fff'});

  const handleChangeComplete = (color:any) => {
    console.log({color});
    
    setBackground({ color: color.hex });
  };
  return <StyledSketchEditor  color={background.color} onChangeComplete={handleChangeComplete} />;
};

export default ColorPicker;
