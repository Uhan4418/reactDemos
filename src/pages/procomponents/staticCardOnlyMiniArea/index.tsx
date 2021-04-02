import React, { FC } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import MiniArea from '@/components/Charts/MiniArea';
import { Col, Row } from 'antd';

type RingChartProps = {
  // base props
  span?: number;  // 栅格化，24的公约数，默认值为6
  // miniArea props
  data?: number[];    // Area的面积，数组
  height?: number;    // 高度，默认值为100
  content?: string;   // 中位线的文字提示
}

const LineChart: FC<RingChartProps> = ({span = 6, data, content}) => {
  const dataArr = [45,63,98,79,100,68,59,38,89]
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard 
          title="mini面积图" 
          tip="mini面积图说明" 
          extra={<EllipsisOutlined />} 
          chart={<MiniArea data={data || dataArr} content={content || '平均数'}/>} 
          />
      </Col>
    </Row>
  );
};
export default LineChart;