/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useEffect, useState } from 'react';
import { Column } from '@ant-design/charts';

type DemoColumnType = {
  data?: {}[];
}

const ColumnChart: FC<DemoColumnType> = ({data}) => {
  const [dataArr, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: data || dataArr,
    xField: '城市',
    yField: '销售额',
    xAxis: { label: { autoRotate: false } },
    scrollbar: { type: 'horizontal' },
  };
  return <Column {...config} />;
};

export default ColumnChart;