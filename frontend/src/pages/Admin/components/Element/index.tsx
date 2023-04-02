import React from 'react';
import styled from 'styled-components';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import useDnDService from '../../../../hooks/useDndService';

const StyledSingleItems = styled.div<{ x?: number; y?: number }>`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.primary400};
  }
`;

const StyledAction = styled.div`
  display: flex;
  gap: 10px;

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
    }

    &.edit {
      background-color: ${(props) => props.theme.color.lightgreen};
    }

    &.delete {
      background-color: ${(props) => props.theme.color.red};
    }
  }
`;

const Element = ({ coordinate, id, item: Component, element }: any) => {
  const { deleteItem, setActiveKey, setClickedItem } = useDnDService();

  const renderTooltipAction = (id: number) => (
    <StyledAction>
      <div
        className="action edit"
        onClick={() => {
          setActiveKey('2');
          setClickedItem(element);
        }}
      >
        <EditOutlined />
      </div>
      <div
        className="action delete"
        onClick={() => {
          deleteItem(id);
        }}
      >
        <DeleteOutlined />
      </div>
    </StyledAction>
  );

  return (
    <StyledSingleItems x={coordinate.x} y={coordinate.y}>
      <Tooltip placement="right" title={renderTooltipAction(id)}>
        <Component key={id}>{element}</Component>
      </Tooltip>
    </StyledSingleItems>
  );
};

export default Element;
