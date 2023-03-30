import { PicLeftOutlined } from '@ant-design/icons';
import { BorderInnerOutlined } from '@ant-design/icons/lib/icons';
import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { Box } from '../Box';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const StyledTab =styled(Tabs)`
 width: 100%;
    .ant-tabs{
        width: 100%;
    }

    .ant-tabs-nav-wrap{
        justify-content: center;
    }
`
const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

interface ItemProps {
  name: string;
  element: React.ElementType;
  icon: React.ReactNode;
}

const Items: ItemProps[] = [
  { name: 'Paragraph', element: 'p', icon: <PicLeftOutlined /> },
  { name: 'Button', element: 'button', icon: <BorderInnerOutlined /> },
];

const Sidebar = () => {
  const onChange = (key: string) => {
    console.log(key);
  };


  const renderItems = useMemo(
    () => Items.map((item, index) => <Box {...item} />),
    [],
  );
  const renderComponentElements =()=> <StyledContainer>{renderItems}</StyledContainer>;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Components`,
      children: renderComponentElements(),
    },
    {
      key: '2',
      label: `Styles`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return <StyledTab defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Sidebar;
