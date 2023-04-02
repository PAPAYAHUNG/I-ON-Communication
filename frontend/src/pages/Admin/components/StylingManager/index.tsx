import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import useDnDService from '../../../../hooks/useDndService';
import { config } from './constant';
import ElementInput from './ElementInput';
import { log } from 'console';
import ColorPicker from './ColorPicker';
import { Collapse } from 'antd';

const StyledContainer = styled.div`
  padding: 0px 10px;
`;
const StyledElement = styled(Collapse)``;
const StyledItem = styled(Collapse.Panel)`
  .includeItem {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

const StylingManager = () => {
  const { dndState } = useDnDService();
  const { clickedItem, listItems } = dndState || {};

  const renderStylingElement = (inputTypes: any) => {
    return inputTypes.includesion.map((includeItem: string, index: number) => {
      return (
        <div className="includeItem" key={index}>
          <div>{includeItem}</div>
          {includeItem === 'Color' ? (
            <ColorPicker />
          ) : (
            <ElementInput type={includeItem} />
          )}
        </div>
      );
    });
  };

  const renderParagraph = () => {
    return config?.p.map((item, index) => {
      return (
        <StyledElement key={index}>
          <StyledItem header={item.name} key={index}>
            <div className="inlcusion">{renderStylingElement(item)}</div>
          </StyledItem>
        </StyledElement>
      );
    });
  };

  return <StyledContainer>{renderParagraph()}</StyledContainer>;
};

export default StylingManager;
