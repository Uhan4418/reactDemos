import React, { FC } from 'react';
import { Table } from 'antd';
import MiniProgress from '@/components/Charts/MiniProgress';

type CardTablePropsType = {
  dataSource?: {}[];
  columns?: {}[];
}

const CardTable: FC<CardTablePropsType> = ({ dataSource, columns}) => {
  const data = [
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
  const tableColumns = [
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
  return <Table columns={columns || tableColumns} dataSource={dataSource || data} pagination={false} style={{ marginTop: 16 }} />;
}

export default CardTable;