/* eslint-disable no-plusplus */
import React from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import './index.less';

const ResizableTitle = (props: { [x: string]: any; onResize: any; width: any }) => {
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
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
      //  列容器最小宽度
      minConstraints={[100, 100]}
      //  列容器最大宽度
      maxConstraints={[300, 300]}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class ResizableColumns extends React.Component {
  state = {
    columns: [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150,
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
      },
      {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150,
      },
      {
        title: 'Column 8',
        dataIndex: 'address',
        key: '8',
        width: 150,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ],
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data: {}[] = [];

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      this.data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
  }

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
      onHeaderCell: (column: { width: any }) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Table
        bordered
        components={this.components}
        columns={columns as any}
        dataSource={this.data}
        // scroll={{ x: 1500, y: 500 }}
        scroll={{ x: 1500 }}
      />
    );
  }
}

export default ResizableColumns;
