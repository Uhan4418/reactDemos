import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import MiniRing from '@/components/Charts/MiniRing';
import { Col, Row } from 'antd';

const { Statistic } = StatisticCard;

type MiniRingType = {
  span?: number;  // 栅格化，24的公约数，默认值为6
  height?: number;
  width?: number;
  percent?: number;
  bgColor?: string;
  ringProps?: {};
}

const RingChart: React.FC<MiniRingType> = ({ span = 6, }) => {
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
        <StatisticCard 
          title="环形图" 
          tip="这里是提示" 
          statistic={{
            title: '付费流量',
            value: 3701928,
            description: <Statistic title="占比" value='65.8%' />,
          }}
          extra={<EllipsisOutlined />} 
          chart={
            <MiniRing percent={0.615} bgColor="#6d96f3" ringProps={{
                statistic: {
                  content: false,
                },
                innerRadius: 0.7,
              }}
            />
          } 
          chartPlacement="left"
        />
      </Col>
      <Col className="gutter-row" span={ span }>
        <StatisticCard
            statistic={{
              title: '免费流量',
              value: 1806062,
              description: <Statistic title="占比" value="38.5%" />,
            }}
            chart={
              <MiniRing
                percent={0.385}
                bgColor="#30BF78"
                // ringProps={{
                //   statistic: {
                //     content: false,
                //   },
                //   innerRadius: 0.7,
                // }}
              />
            }
            chartPlacement="left"
          />
      </Col>
      <Col className="gutter-row" span={ span }>
        <StatisticCard
            statistic={{
              title: '信息完成度',
              value: 5,
              suffix: '/ 100',
              description: <Statistic title="月同比" value="64.7%" trend="up" />,
            }}
            chart={<MiniRing percent={0.8} width={80} height={80} />}
            chartPlacement="right"
          />
      </Col>
    </Row>
  );
};
export default RingChart;  