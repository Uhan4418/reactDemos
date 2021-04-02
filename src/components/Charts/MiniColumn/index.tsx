import React, { FC } from 'react';
import { TinyColumn } from '@ant-design/charts'; // https://charts.ant.design/

type MiniColumnType = {
  height?: number;
  data?: number[];
  xField?: string;
  yField?: string;
  content?: string;
}

const MiniColumn: FC<MiniColumnType> = ({ height = 100, data, xField, yField, content }) => {
  const dataArr = [461, 983, 654, 853, 319, 359, 362, 275, 737, 178, 85];

  // 柱状体config
  const configColumn = {
    width: 200,
    height,
    data: data || dataArr || [],
    xField: xField || 'index',
    yField: yField || 'value',
    color: '#5e92f6',
    annotations: [
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        style: {
          lineWidth: 0.5,
          stroke: 'rgba(0,0,0, 0.25)',
        },
      },
      {
        type: 'text',
        position: ['min', 'mean'],
        content: content || '',
        offsetY: -4,
        style: {
          fill: 'rgba(44, 53, 66, 0.65)',
          fontSize: 12,
          fontWeight: 'normal',
          textBaseline: 'bottom',
          shadowColor: '#fff',
          shadowBlur: 4,
        },
      },
    ],
  };
  // @ts-ignore
  return <TinyColumn {...configColumn} />;
}

export default MiniColumn;