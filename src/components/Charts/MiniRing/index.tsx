import React, { FC } from 'react';
import { RingProgress } from '@ant-design/charts';

type MiniRingType = {
  height?: number;
  width?: number;
  percent?: number;
  bgColor?: string;
  ringProps?: {};
}

const MiniRing: FC<MiniRingType> = ({
  height = 64,
  width = 64,
  percent = 0.8,
  bgColor = '#30BF78',
  ringProps = {},
}) => {
  const config = {
    width,
    height,
    percent,
    color: [bgColor, '#E8EDF3'],
    ...ringProps,
  };
  return <RingProgress {...config} />
}

export default MiniRing;