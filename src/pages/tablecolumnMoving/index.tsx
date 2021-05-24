import { Table } from 'antd';
import React, { useState,  } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Resizable, ResizableBox } from 'react-resizable';
import ProCard from '@ant-design/pro-card';
import { ColumnsType } from 'antd/lib/table';
import Draggable from "react-draggable";
import './index.less';

const ResizableTitle = props => {
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


const Index: React.FC<{}> = () => {
  const [sorter, setSorter] = useState<string>('');
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({ create: false });

  const handleResize = index => (e, { size }) => {
    console.log('handleResize',size);
      // const nextColumns = [...cols];
      // nextColumns[index] = {
      //   ...nextColumns[index],
      //   width: size.width,
      // };
      // setCols(nextColumns);
  };

  return (
    <PageHeaderWrapper>
      <ProCard split="vertical">
        <ProCard title="新建工程" colSpan="50%">
          <Table
            // components={{
            //   header: {
            //     cell: ResizableTitle,
            //   },
            // }}
            // columns={
            //   [
            //     {
            //       // title: '进货合同总单标识号',
            //       title: <ResizableBox width={200} minConstraints={[100, 100]} maxConstraints={[300, 300]} ><span>Contents</span></ResizableBox>,
            //       dataIndex: 'suconid',
            //       key: 'suconid',
            //       width: 200,
            //     },
            //     {
            //       title: '合同号',
            //       dataIndex: 'suconno',
            //       key: 'suconno',
            //       width: 150,
            //     },
            //     {
            //       title: '签约日',
            //       dataIndex: 'signdate',
            //       key: 'signdate',
            //       width: 150,
            //     },
            //     {
            //       title: '签约地',
            //       dataIndex: 'signaddress',
            //       key: 'signaddress',
            //       width: 150,
            //     },
            //     {
            //       title: '有效期开始日期',
            //       dataIndex: 'validbegdate',
            //       key: 'validbegdate',
            //       width: 150,
            //     },
            //     {
            //       title: '有效期结束日期',
            //       dataIndex: 'validenddate',
            //       key: 'validenddate',
            //       width: 150,
            //     },
            //     {
            //       title: '供应商标识号',
            //       dataIndex: 'supplyid',
            //       key: 'supplyid',
            //       width: 150,
            //     },
            //     {
            //       title: '供应商名称',
            //       dataIndex: 'supplyname',
            //       key: 'supplyname',
            //       width: 150,
            //     },
            //     {
            //       title: '合计金额(含税不含其他费用)',
            //       dataIndex: 'total',
            //       key: 'total',
            //       width: 250,
            //     },
            //     {
            //       title: '录入员标识号',
            //       dataIndex: 'inputmanid',
            //       key: 'inputmanid',
            //       width: 150,
            //     },
            //     {
            //       title: '其他费用',
            //       dataIndex: 'othermoney',
            //       key: 'othermoney',
            //       width: 150,
            //     },
            //     {
            //       title: '合同类型',
            //       dataIndex: 'contracttype',
            //       key: 'contracttype',
            //       width: 150,
            //     },
            //     {
            //       title: '备注',
            //       dataIndex: 'memo',
            //       key: 'memo',
            //       width: 150,
            //     },
            //     {
            //       title: '运输方式',
            //       dataIndex: 'tranmethod',
            //       key: 'tranmethod',
            //       width: 150,
            //     },
            //     {
            //       title: '代理方式',
            //       dataIndex: 'agentflag',
            //       key: 'agentflag',
            //       width: 150,
            //     },
            //     {
            //       title: '承付模式',
            //       dataIndex: 'paymode',
            //       key: 'paymode',
            //       width: 150,
            //     },
            //     {
            //       title: '完成日期',
            //       dataIndex: 'findate',
            //       key: 'findate',
            //       width: 150,
            //     },
            //     {
            //       title: '结算方式',
            //       dataIndex: 'settletypeid',
            //       key: 'settletypeid',
            //       width: 150,
            //     },
            //     {
            //       title: '预付款',
            //       dataIndex: 'prepay',
            //       key: 'prepay',
            //       width: 150,
            //     },
            //   ]
            // }
            columns={[
              {
                title: 
                  <ResizableBox width={200} minConstraints={[100, 100]} maxConstraints={[300, 300]}
                    >
                    <span>Contents</span>
                  </ResizableBox>,
                dataIndex: 'name',
                // onHeaderCell : (colmun, index) => {
                //   console.log("onHeaderCell",colmun);
                //   return {
                //     width :  colmun.width,
                //   }
                // }
              },
              {
                title: 'Chinese Score',
                dataIndex: 'chinese',
                sorter: {
                  compare: (a, b) => a.chinese - b.chinese,
                  multiple: 3,
                },
              },
              {
                title: 'Math Score',
                dataIndex: 'math',
                sorter: {
                  compare: (a, b) => a.math - b.math,
                  multiple: 2,
                },
              },
              {
                title: 'English Score',
                dataIndex: 'english',
                sorter: {
                  compare: (a, b) => a.english - b.english,
                  multiple: 1,
                },
              },
            ]}
            dataSource={[
              {
                key: '1',
                name: 'John Brown',
                chinese: 98,
                math: 60,
                english: 70,
              },
              {
                key: '2',
                name: 'Jim Green',
                chinese: 98,
                math: 66,
                english: 89,
              },
              {
                key: '3',
                name: 'Joe Black',
                chinese: 98,
                math: 90,
                english: 70,
              },
              {
                key: '4',
                name: 'Jim Red',
                chinese: 88,
                math: 99,
                english: 89,
              },
            ]}
          />
        </ProCard>
        <ProCard title="所需组件" headerBordered>
          <div style={{ height: 360 }}>右侧内容</div>
        </ProCard>
      </ProCard>
    </PageHeaderWrapper>
  );
};

export default Index;
