/* eslint-disable prefer-const */
import React, { FC } from 'react';
import { StatisticCard } from '@ant-design/pro-card';
import Ring from '@/components/Charts/Ring';
import { Col, Row } from 'antd';

type MiniRingType = {
  span?: number;  // 栅格化，24的公约数，默认值为6
  title?: string;
  data?: {}[];
  // height?: number;
  // width?: number;
  // percent?: number;
  // bgColor?: string;
  // ringProps?: {};
}

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

const RingChart: FC<MiniRingType> = ({span = 6, data}) => {

  const toTotal =  (dataArrs: any) => {
    let num = dataArrs.map( (item: { value: any; }) => item.value);
    console.log('total',num.reduce((n: any,m: any) => n +m));
    return num.reduce((n: any,m: any) => n +m);
  }

  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard 
          title='流量使用情况'
          chart={ <Ring data={data || dataArr} total={toTotal(data || dataArr)}/> } 
        />
      </Col>
    </Row>
    
  );
};
export default RingChart;  