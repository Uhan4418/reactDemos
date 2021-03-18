import React from 'react';
import moment from 'moment';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Space, Image } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};
export type TableListItem = {
  key: number;
  name: string;
  status: string | number;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
  avatar: string;
  image: string;
};
const tableListDataSource: TableListItem[] = [];
for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    avatar: 'https://avatars.githubusercontent.com/u/48127710?s=460&u=01abf1af99272989a2f303d5c673b1a82f976c9b&v=4',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 1000),
    createdAt: moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
      moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}
const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
  },
  {
    title: 'border 序号',
    dataIndex: 'index',
    key: 'indexBorder',
    valueType: 'indexBorder',
  },
  {
    title: '代码',
    key: 'code',
    width: 120,
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    valueType: 'avatar',
    width: 150,
    render: (dom) => (
      <Space>
        <span>{dom}</span>
        <a href="https://github.com/Uhan4418" target="_blank" rel="noopener noreferrer">
          Uhan4418
        </a>
      </Space>
    ),
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    // valueType: 'image',
    render: (image: string) => {
      return (
        <>
          <Image
            width={50}
            src={image}
          />
        </>
      )
    },
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];
export default () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="样式类"
    // toolbar中的icon是否展示
    // options={false}
    // 设置toolbar为空
    // toolbar={{
    //   settings: [],
    // }}
    />
  </>
);