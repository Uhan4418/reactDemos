import React from 'react'
import './index.less'
import PropTypes from 'prop-types'

import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import { getTableList, getDetailTableList, getDetail } from './_mock';

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
    >
      <th {...restProps} />
    </Resizable>
  );
};

class ResizableTable extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a: { amount: number; }, b: { amount: number; }) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a>Delete</a>,
      },
      // {
      //   title: '进货合同总单标识号',
      //   // title: <ResizableBox width={150} minConstraints={[100, 100]} maxConstraints={[300, 300]}><span>进货合同总单标识号</span></ResizableBox>,
      //   dataIndex: 'suconid',
      //   key: 'suconid',
      //   width: 150,
      // },
      // {
      //   title: '合同号',
      //   dataIndex: 'suconno',
      //   key: 'suconno',
      //   width: 150,
      // },
      // {
      //   title: '签约日',
      //   dataIndex: 'signdate',
      //   key: 'signdate',
      //   width: 150,
      // },
      // {
      //   title: '签约地',
      //   dataIndex: 'signaddress',
      //   key: 'signaddress',
      //   width: 150,
      // },
      // {
      //   title: '有效期开始日期',
      //   dataIndex: 'validbegdate',
      //   key: 'validbegdate',
      //   width: 150,
      // },
      // {
      //   title: '有效期结束日期',
      //   dataIndex: 'validenddate',
      //   key: 'validenddate',
      //   width: 150,
      // },
      // {
      //   title: '供应商标识号',
      //   dataIndex: 'supplyid',
      //   key: 'supplyid',
      //   width: 150,
      // },
      // {
      //   title: '供应商名称',
      //   dataIndex: 'supplyname',
      //   key: 'supplyname',
      //   width: 150,
      // },
      // {
      //   title: '合计金额(含税不含其他费用)',
      //   dataIndex: 'total',
      //   key: 'total',
      //   width: 250,
      // },
      // {
      //   title: '录入员标识号',
      //   dataIndex: 'inputmanid',
      //   key: 'inputmanid',
      //   width: 150,
      // },
      // {
      //   title: '其他费用',
      //   dataIndex: 'othermoney',
      //   key: 'othermoney',
      //   width: 150,
      // },
      // {
      //   title: '合同类型',
      //   dataIndex: 'contracttype',
      //   key: 'contracttype',
      //   width: 150,
      // },
      // {
      //   title: '备注',
      //   dataIndex: 'memo',
      //   key: 'memo',
      //   width: 150,
      // },
      // {
      //   title: '运输方式',
      //   dataIndex: 'tranmethod',
      //   key: 'tranmethod',
      //   width: 150,
      // },
      // {
      //   title: '代理方式',
      //   dataIndex: 'agentflag',
      //   key: 'agentflag',
      //   width: 150,
      // },
      // {
      //   title: '承付模式',
      //   dataIndex: 'paymode',
      //   key: 'paymode',
      //   width: 150,
      // },
      // {
      //   title: '完成日期',
      //   dataIndex: 'findate',
      //   key: 'findate',
      //   width: 150,
      // },
      // {
      //   title: '结算方式',
      //   dataIndex: 'settletypeid',
      //   key: 'settletypeid',
      //   width: 150,
      // },
      // {
      //   title: '预付款',
      //   dataIndex: 'prepay',
      //   key: 'prepay',
      //   width: 150,
      // },
    ],
    // dataSource: [
    //   {
    //     key: 0,
    //     date: '2018-02-11',
    //     amount: 120,
    //     type: 'income',
    //     note: 'transfer',
    //   },
    //   {
    //     key: 1,
    //     date: '2018-03-11',
    //     amount: 243,
    //     type: 'income',
    //     note: 'transfer',
    //   },
    //   {
    //     key: 2,
    //     date: '2018-04-11',
    //     amount: 98,
    //     type: 'income',
    //     note: 'transfer',
    //   },
    // ]
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  handleResize = (index: number) => (_e: any, { size }: any) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  // 获取列表信息
  // getList = () => {
  //   const _list = getTableList( 1, 20 );
  //   this.setState({dataSource: _list})
  //   // setTableList( _list )
  // }

  // componentDidMount(){
  //   this.getList()
  // }

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: { width: any; }) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered components={this.components} columns={columns as any} dataSource={this.data} />;
  }
}

export default ResizableTable