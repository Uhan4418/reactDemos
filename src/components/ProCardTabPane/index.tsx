/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import QueryRangePicker from '@/components/QueryRangePicker';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface SearchParamsType {
  queryParam?: string;
  status?: string;
  current?: number;
  pageSize?: number;
  types?: string;
  productOpcode?: string;
  startTime?: string;
  endTime?: string;
  serial?: string;
  name?: string;
}

type TabPaneProCardType = {
  tab1title?: string;
  tab2title?: string;
  tabContent1?: any
  tabContent2?: any
}

const TabPaneProCard: FC<TabPaneProCardType> = ({tab1title, tab2title, tabContent1, tabContent2}) => {
  const [responsive, setResponsive] = useState(false);

  // 搜索
  const handleOnSearch = (params: SearchParamsType) => {
    const newParams = {
      ...params
    }
    console.log('参数',newParams)
    // setSearchParams(_newParams);
    // historyPush(_newParams);
    // getList(_newParams)
  }

  const TabPaneCard = () => {
    return (
      <Tabs 
        defaultActiveKey="2"
        tabBarExtraContent={<QueryRangePicker 
        onChange={handleOnSearch}
        />}>
        <TabPane tab={tab1title || "Tab 1"} key="1">
          {tabContent1 || 'Content of tab 1'}
        </TabPane>
        <TabPane tab={tab2title || "Tab 2"} key="2">
          {tabContent2 || 'Content of tab 1'}
        </TabPane>
      </Tabs>
    )
  }

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 640);
      }}
    >
      <ProCard>
        <TabPaneCard/>
      </ProCard>
    </RcResizeObserver>
  );
}

export default TabPaneProCard;