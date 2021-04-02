import React, { FC } from 'react';
import StaticCard from '@/components/Charts/StaticCard';
import { Col, Row } from 'antd';

type StaticChartProps = {
  // base props
  span?: number;  // 栅格化，24的公约数，默认值为6
  // staticcard props
  title?: string;
  value?: number;
  suffix?: string;
}

const AreaChart: FC<StaticChartProps> = ({span = 6, title='活动资金', value=5678945, suffix='元'}) => {
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StaticCard title={title} value={value} suffix={suffix}/>
      </Col>
    </Row>
  );
};
export default AreaChart;