import React, { FC } from 'react';
import { StatisticCard } from '@ant-design/pro-card';

const { Statistic } = StatisticCard;

type StaticCardType = {
  title?: string;
  value?: number | string ;
  precision?: number;
  suffix?: string;
  showDes?: boolean;
  statitle?: string;
  staval?: string;
  trend?: 'up' | 'down'; 
}

const StaticCard: FC<StaticCardType> = ({title='金额', value=112893, precision=0, suffix='', showDes=true, statitle='', staval='', }) => {
  return (
    <StatisticCard
      statistic={{
        title,
        value,
        // 数值精确度
        precision,
        // 后缀
        suffix: suffix || '',
        description: showDes && (
          <>
            <Statistic title={statitle} value={staval}  />
          </>
        ),
      }}
      style={{ maxWidth: 420 }}
    />
  );
}

export default StaticCard;