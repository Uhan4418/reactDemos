import React, { FC } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import MiniColumn from '@/components/Charts/MiniColumn';
import { Col, Row } from 'antd';

type MiniColumnProps = {
  span?: number;  // 栅格化，24的公约数，默认值为6
  height?: number;
  data?: [];
  xField?: string;
  yField?: string;
  content?: string;
}

const MiniColumnChart: FC<MiniColumnProps> = ({ span = 6, data }) => {
  const dataArr = data || [461, 983, 654, 853, 319, 359, 362, 275, 737, 178, 85];
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard title="mini柱状图" tip="mini柱状图面积图说明" extra={<EllipsisOutlined />} chart={<MiniColumn data={ data || dataArr || [] }/>} />
      </Col>
    </Row>
  );
};
export default MiniColumnChart;