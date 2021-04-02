import React, { FC, useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import ColumnChart from '@/components/Charts/Column';
import List from '@/components/List';

const TabContent: FC = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 640);
      }}
    >
      <ProCard
        // split={responsive ? 'horizontal' : 'vertical'}
        gutter={8}
        ghost
        >
        <ProCard layout="default">
          <StatisticCard
            title='销售趋势'
            chart={<ColumnChart/>}
          />
        </ProCard>
        <ProCard colSpan="30%">
          <StatisticCard
              title='排行'
              chart={<List/>}
            />
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  )
}

export default TabContent;