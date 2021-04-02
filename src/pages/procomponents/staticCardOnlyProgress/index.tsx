import React, { FC } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import MiniProgress from '@/components/Charts/MiniProgress';
import { Col, Row } from 'antd';

type RingChartProps = {
  // base props
  span?: number;  // 栅格化，24的公约数，默认值为6
  // miniProgress props
  bgColor?: string;   // 进度条进度颜色
  percent?: number;     // 进度条的百分比, 小数形式（80% == 0.8）
}

const LineChart: FC<RingChartProps> = ({span = 6, bgColor, percent }) => {
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard title="mini进度条" tip="mini进度条说明" extra={<EllipsisOutlined />} chart={<MiniProgress bgColor={bgColor || '#356601'}  percent={percent || 0.7}/>} />
      </Col>
    </Row>
  );
};
export default LineChart;