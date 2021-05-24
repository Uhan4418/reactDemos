import React from 'react';
import { Resizable } from 'react-resizable';
import ProTable from '@ant-design/pro-table';
import './index.less'

const ResizableTitle = (props: { [x: string]: any; onResize: any; width: any; }) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={e => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
      minConstraints={[120, 120]} 
      maxConstraints={[300, 300]}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      Date.now() - Math.floor(Math.random() * 2000),
      Date.now() - Math.floor(Math.random() * 2000),
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

class Demo extends React.Component {
  state = {
    columns: [
      {
        title: '进度',
        key: 'progress',
        dataIndex: 'progress',
        valueType: (item: { status: string; }) => ({
          type: 'progress',
          status: item.status !== 'error' ? 'active' : 'exception',
        }),
        width: 200,
      },
      {
        title: '金额',
        dataIndex: 'money',
        valueType: 'money',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'digit',
        valueType: 'digit',
        width: 150,
      },
      {
        title: '数字',
        dataIndex: 'money',
        key: 'second',
        valueType: 'second',
        width: 150,
      },
      {
        title: '百分比',
        key: 'percent',
        width: 120,
        dataIndex: 'percent',
        valueType: () => ({
          type: 'percent',
        }),
      },
      {
        title: '操作',
        key: 'option',
        width: 120,
        valueType: 'option',
        render: (_: any, row: { key: any; }, index: any, action: { startEditable: (arg0: any) => void; }) => [
          <a
            key="a"
            onClick={() => {
              action?.startEditable(row.key);
            }}
          >
            编辑
          </a>,
        ],
      },
    ]
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  handleResize = (index: number) => (e: any, { size }: any) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: { width: any; }) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <ProTable<TableListItem>
      // bordered
      components={this.components}
      columns={columns as any}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="数字类"
      scroll={{ x: "100%", y: 240 }}
    />;
  }
}

export default Demo