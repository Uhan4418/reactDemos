import React from 'react';
import { Line } from '@ant-design/charts'; // https://charts.ant.design/

type DataType = {
  year?: string;
  value?: number; 
}

type LinePropsType = {
  height?: number;  //  折线图表的高度
  autoFit?: boolean;  // 图形大小自适应
  data?: DataType[];  // 折线图的数据，格式：数组对象
  max?: number;   // y轴最大值
  min?: number;   // y轴最小值
  xField?: string;    // x方向备注
  yField?: string;    // y方向备注
}

const LineChart: React.FC<LinePropsType> = ({ height, autoFit = true, data, max, min, xField, yField }) => {
  const dataArr = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];

  const config = {
    autoFit,
    height: height || 100,
    data: data || dataArr || [],
    xField: xField || 'year',
    yField: yField || 'value',
    label: {},
    yAxis: {
      nice: true,
      min: min || 0,
      max: max || 15,
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5b8ff9',
        lineWidth: 2,
      },
    },
  };
  
  return <Line {...config} />
}

export default LineChart;