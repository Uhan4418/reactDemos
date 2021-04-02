import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import { Col, Row, Space } from 'antd';
import MiniArea from '@/components/Charts/MiniArea';
import MiniProgress from '@/components/Charts/MiniProgress';

const { Statistic } = StatisticCard;

type BaseStaticCardProps = {
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

const BaseStaticCard: React.FC<BaseStaticCardProps> = ({ span = 6, total, completion, target, bgColor, percent, data }) => {
  const dataArr = [
    423,
    563,
    509,
    245,
    319,
    785,
    362,
    275,
    373,
    179,
    100,
    595,
    528,
    567,
    405,
    736,
    247,
    35,
    461,
    815,
  ];
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={ span }>
          <StatisticCard
          title={
            <Space>
              <span>进度条+mini面积图</span>
            </Space>
          }
          tip='这里是标题的提示'
          extra={<EllipsisOutlined />}
          statistic={{
            value: total || 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value={completion? `${completion*100/100}%` : "82.3%"} />
                <Statistic title="当前目标" value={target ? `¥${target}` : "¥6000"} />
              </Space>
            ),
          }}
          chart={
            <>
              <MiniProgress bgColor={bgColor ||"#F4664A"} percent={ percent }/>
              <MiniArea data={data || dataArr} content='中位数'/>
            </>
          }
          // 脚部
          footer={
            <>
              <Statistic value={15.1} title="累计注册数" suffix="万" layout="horizontal" />
            </>
          }
        />
      </Col>
      <Col className="gutter-row" span={ span }>
          <StatisticCard
          title={
            <Space>
              <span>部门二</span>
            </Space>
          }
          tip='这里是标题的提示'
          extra={<EllipsisOutlined />}
          statistic={{
            value: total || 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value={completion? `${completion*100/100}%` : "82.3%"} />
                <Statistic title="当前目标" value={target ? `¥${target}` : "¥6000"} />
              </Space>
            ),
          }}
          chart={
            <>
              <MiniProgress bgColor={bgColor ||"yellow"} percent={ percent || 0.6}/>
              <MiniArea data={data || dataArr} content='平均数'/>
            </>
          }
        />
      </Col>
      <Col className="gutter-row" span={ span }>
          <StatisticCard
          title={
            <Space>
              <span>部门三</span>
            </Space>
          }
          tip='这里是标题的提示'
          extra={<EllipsisOutlined />}
          statistic={{
            value: total || 5967814,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value={completion? `${completion*100/100}%` : "82.3%"} />
                <Statistic title="当前目标" value={target ? `¥${target}` : "¥6000"} />
              </Space>
            ),
          }}
          chart={
            <>
              <MiniProgress bgColor={bgColor || "#F4664A"} percent={ percent }/>
              <MiniArea data={data || dataArr} content='中位线'/>
            </>
          }
        />
      </Col>
      <Col className="gutter-row" span={ span }>
          <StatisticCard
          title={
            <Space>
              <span>部门四</span>
            </Space>
          }
          tip='这里是标题的提示'
          extra={<EllipsisOutlined />}
          statistic={{
            value: total || 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value={completion? `${completion*100/100}%` : "82.3%"} />
                <Statistic title="当前目标" value={target ? `¥${target}` : "¥6000"} />
              </Space>
            ),
          }}
          chart={
            <>
              <MiniProgress bgColor={bgColor || 'green' } percent={ percent ||0.4}/>
              <MiniArea data={data || dataArr} content='中位线'/>
            </>
          }
        />
      </Col>
    </Row>
    
  );
}

export default BaseStaticCard;