import React, { FC } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import Line from '@/components/Charts/Line';
import { Col, Row } from 'antd';

type RingChartProps = {
  // base props
  span?: number;  // 栅格化，24的公约数，默认值为6
  total?: number;  //  总量
  completion?: number;  // 完成度
  target?: number;    // 目标量
  // miniProgress props
  bgColor?: string;   // 进度条进度颜色
  percent?: number;     // 进度条的百分比, 小数形式（80% == 0.8）
  // miniArea props
  data?: number[];    // Area的面积，数组
  height?: number;    // 高度，默认值为100
  content?: string;   // 中位线的文字提示
}

const LineChart: FC<RingChartProps> = ({span = 6}) => {
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard title="大盘趋势" tip="大盘说明" extra={<EllipsisOutlined />} chart={<Line />} />
      </Col>
    </Row>
  );
};
export default LineChart;