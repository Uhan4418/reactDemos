import React from 'react';
import { TinyArea } from '@ant-design/charts'; // https://charts.ant.design/

type MiniAreaProps = {
  data?: number[];
  height?: number;
  content?: string;
}

const MiniArea: React.FC<MiniAreaProps> = ({ data, height = 100, content}) => {
  const dataArr = data || [
    461,
    983,
    655,
    854,
    319,
    359,
    362,
    275,
    737,
    179,
    86,
    595,
    528,
    824,
    405,
    736,
    247,
    35,
    461,
    815,
  ];
  const config = {
    height,
    data: dataArr || [],
    smooth: true,
    autoFit: true,
    annotations: [
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          lineWidth: 0.5,
          stroke: 'rgba(0,0,0, 0.25)',
        },
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: content || '中位数',
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
  return <TinyArea {...config} />;
}

export default MiniArea;