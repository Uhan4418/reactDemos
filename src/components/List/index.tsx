import React, { FC } from 'react'
import { StatisticCard } from '@ant-design/pro-card';
import { List,  Space } from 'antd';
import classNames from 'classnames';
import styles from './index.less'


const { Statistic } = StatisticCard

const data = [
  {
    storename: `康德路0号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路1号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路2号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路3号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路4号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路5号店`,
    salevolume: 4564879
  },
  {
    storename: `康德路6号店`,
    salevolume: 4564879
  },
];

const renderListItem = (item: { storename: any; salevolume: any; },index: number) => {
  const {storename, salevolume} = item
  return (
    <div className={styles.listItemLayout}>
      {/* <Space> */}
        <Statistic value={index+1} />
        {/* <Space>  */}
          <Statistic value={storename} />
          <Statistic className={styles.marginRight0} value={salevolume}/>
        {/* </Space>
      </Space> */}
    </div>
  )
}

type ListComType = {
  dataSource?: [];
}

const ListCom: FC<ListComType> = ({dataSource}) => {
  return (
    <List
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      // bordered
      dataSource={dataSource || data}
      renderItem={(item,index) => {
        console.log(item,index);
        return (
          <List.Item style={{borderBottom:'none'}}>
            {renderListItem(item,index)}
          </List.Item>
        )
      }}
    />
  )
}

export default ListCom;