import React, { FC } from 'react';
import { Column } from '@ant-design/charts';

type DemoColumnType = {
  data?: {}[];
}

const ColumnChart: FC<DemoColumnType> = ({data}) => {
  const dataArr = data || [
    {
      action: '浏览网站',
      pv: 80000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config = {
    data: dataArr,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
  };
  return <Column {...config} />;
};

export default ColumnChart;