/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import QueryRangePicker from '@/components/QueryRangePicker';
import Ring from '@/components/Charts/Ring';
import ChartTable from '@/components/Charts/ChartTable';
import Line from '@/components/Charts/Line';
import { Tabs } from 'antd';

const { Statistic } = StatisticCard;
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

const TabPaneProCard: FC = () => {
  const [responsive, setResponsive] = useState(false);

  const dataArr = [
    {
      type: '分类1',
      value: 23,
    },
    {
      type: '分类2',
      value: 45,
    },
    {
      type: '分类3',
      value: 56,
    },
    {
      type: '分类4',
      value: 34,
    },
    {
      type: '分类5',
      value: 10,
    },
    {
      type: 'others',
      value: 66,
    },  
  ];


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

  const TabContent = () => {
    return (
      <ProCard
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              {/* <div style={{display:'flex'}}>
                <StaticCard 
                  title='昨日全部流量' 
                  value={234} 
                  suffix=''
                  precision={0}
                  statitle='较本月平均流量'
                  staval='8.04%'
                  trend='down'
                  />
                <Divider type='vertical' className={styles.antDividerVertical}/>
                <StaticCard 
                  title='本月累计流量' 
                  value={234} suffix=''
                  precision={0}
                  statitle='月同比'
                  staval='8.04%'
                  trend='up'
                  />
              </div> */}
              <StatisticCard
                statistic={{
                  title: '昨日全部流量',
                  value: 234,
                  description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计流量',
                  value: 234,
                  description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              {/* <div style={{display:"flex"}}>
                <StaticCard 
                  title='运行中实验' 
                  value='12/56' 
                  suffix='个'
                  showDes={false}
                  />
                <Divider type='vertical' className={styles.antDividerVertical}/>
                <StaticCard 
                  title='历史实验总数' 
                  value='134' 
                  suffix='个'
                  showDes={false}
                  />
              </div> */}
              <StatisticCard
                statistic={{
                  title: '运行中实验',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史实验总数',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard title="流量走势" chart={<Line height={250} />} />
        </ProCard>
        <StatisticCard
          title="流量占用情况"
          chart={
            <>
              <Ring data={dataArr} descTitleOffsetY={-14} descContentOffsetY={4}/>
              <ChartTable />
            </>
          }
        />
      </ProCard>
    )
  }

  const TabPaneCard = () => {
    return (
      <Tabs tabBarExtraContent={<QueryRangePicker onChange={handleOnSearch}/>}>
        <TabPane tab="Tab 1" key="1">
          <TabContent/>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
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