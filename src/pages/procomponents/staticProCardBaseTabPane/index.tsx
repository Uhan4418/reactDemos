import React, { FC } from 'react';
import TabPaneCard from '@/components/ProCardTabPane';
import TabContent1 from '@/components/combination1';
import TabContent2 from '@/components/combination2';

const ProCardTabPane: FC = () => {
  return <TabPaneCard
    tab1title='总体数据统计' 
    tab2title='销售及排行' 
    tabContent1={<TabContent1/>} 
    tabContent2={<TabContent2/>}
    />;
};

export default ProCardTabPane;