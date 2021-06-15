import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
import type { FC } from 'react';
import React from 'react';
import ResizableColumns from './ResizableColumns';

const ReCol: FC = () => {
  return (
    <PageHeaderWrapper title=" ">
      <div style={{ margin: 20 }}>
        {/* <Card bordered={ false } loading={ statusLoading }> */}
        <Card bordered={false}>
          <ResizableColumns />
        </Card>
      </div>
    </PageHeaderWrapper>
  );
};

export default ReCol;
