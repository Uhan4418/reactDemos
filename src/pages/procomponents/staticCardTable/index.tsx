import React, { FC, useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import ChartTable from '@/components/Charts/ChartTable';
import MiniProgress from '@/components/Charts/MiniProgress';

type TableCardProps = {
  span?: number;  // 栅格化，24的公约数，默认值为6
  tableTitle?: string;
  dataSource?: {}[];
  columns?: {}[];
}

const TableCardChart: FC<TableCardProps> = ({ span = 6, tableTitle='数据概览' }) => {
  const [responsive, setResponsive] = useState(false);
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      percent: 0.2,
      flow: 2335,
    },
    {
      key: '2',
      name: 'Jim Green',
      percent: 0.4,
      flow: 3245,
    },
    {
      key: '3',
      name: 'Joe Black',
      percent: 0.6,
      flow: 3445,
    },
  ];
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '占比',
      dataIndex: 'percent',
      key: 'percent',
      render: (percent: number) => <MiniProgress percent={percent} />,
    },
    {
      title: '流量',
      dataIndex: 'flow',
      key: 'flow',
    },
  ];
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 640);
      }}
    >
      <ProCard
        title={tableTitle}
        extra="2019年9月28日 星期五"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <StatisticCard
          chart={ <ChartTable dataSource={dataSource} columns={columns}/> }
        />
      </ProCard>
    </RcResizeObserver>
  );
};
export default TableCardChart;