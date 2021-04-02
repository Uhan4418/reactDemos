/* eslint-disable no-nested-ternary */
import React from 'react';
import { Pie } from '@ant-design/charts';
import { toNumber } from 'lodash';

type RingPiePropsType = {
  data?: {}[];
  descTitleOffsetY?: number;
  descContentOffsetY?: number;
}

const DemoDonut: React.FC<RingPiePropsType> = ({ data, descTitleOffsetY=-10, descContentOffsetY=-2}) => {
  const dataArr = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];

  const toTotal =  (dataArrs: any) => {
    const num = dataArrs.map( (item: { value: any; }) => item.value);
    return num.reduce((n: any,m: any) => n +m);
  }

  const totalnum = toTotal( data || dataArr) 

  const config: any = {
    autoFit: true,
    height: 250,
    data: data || dataArr,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    // 图例标签
    // legend: false,
    label: {
      type: 'inner',
      content: '{value}',
      autoRotate: false,
      style: {
        fill: '#333',
        stroke: '#fff',
        strokeWidth: 1,
        shadowColor: '#fff',
        shadowBlur: 4,
      },
    },
    statistic: {
      title: {
        offsetY: descTitleOffsetY,
        formatter: () => '总计',
      },
      content: {
        offsetY: descContentOffsetY,
        formatter: () => toNumber(totalnum)>=1000000 ? `${toNumber(totalnum)/1000000}M` : toNumber(totalnum)>=10000 ? `${toNumber(totalnum)/10000}W` : toNumber(totalnum)>=1000 ? `${toNumber(totalnum)/1000}K` : totalnum 
        // formatter: () => {
        //   if(toNumber(total)>1000000){
        //     return `${toNumber(total)/1000000}M`
        //   }
        //   if(toNumber(total)>10000){
        //     return `${toNumber(total)/10000}W`
        //   }
        //   if(toNumber(total)>1000){
        //     return `${toNumber(total)/1000}K`
        //   }
        //   return total
        // },
      },
    },
  };
  return <Pie {...config} />;
};
export default DemoDonut;