import React, { FC } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import Area from '@/components/Charts/Area';
import { Col, Row } from 'antd';

type AreaChartProps = {
  // base props
  span?: number;  // 栅格化，24的公约数，默认值为6
  // Area props
  data?: {}[];    // Area的面积，数组
  min?: number;
  max?: number;
}

const AreaChart: FC<AreaChartProps> = ({span = 6, data}) => {
  const dataArr = [
    { index: '秦', value: 10 },
    { index: '汉', value: 10 },
    { index: '商', value: 10 },
    { index: '魏', value: 10 },
    { index: '蜀', value: 11 },
    { index: '吴', value: 11 },
    { index: '元', value: 11 },
    { index: '唐', value: 11 },
    { index: '清', value: 11 },
    { index: '明', value: 9 },
    { index: '隋', value: 10 },
    { index: '周', value: 9.8 },
    { index: '晋', value: 12 },
  ];
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard title="smootAreaChart" tip="面积图说明" extra={<EllipsisOutlined />} chart={<Area data={data || dataArr || []}/>} />
      </Col>
    </Row>
  );
};
export default AreaChart;