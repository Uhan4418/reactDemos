import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { connect } from 'umi';
const { Option } = Select;
import styles from './index.less'

const datetype = [
  {label:"昨天", value:1},
  {label:"当月", value:2},
  {label:"当年", value:3},
  {label:"其他", value:4},
]
const datatype = [
  {label:"销售数据", value:1},
  {label:"进货数据", value:2},
  {label:"库存数据", value:3},
  {label:"其他出入库数据", value:4},
]

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      {/* <Row gutter={24}>{getFields()}</Row> */}
        <Row gutter={24}>
          {expand ? 
            (<>
              <Col span={12}>
                  <Form.Item
                  name="mId"
                  label="模块ID"
                  rules={[{ required: true, message: `username is required! Please enter user name` }]}
                  >
                  <Input placeholder="Please enter user name"  allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="querytypeid"
                      label="查询数据类型"
                  //     rules={[
                  //     {
                  //         message: 'Please input your password!',
                  //     },
                  //     ]}
                  >
                      <Select placeholder="Please select an owner">
                          {datatype && datatype.length && datatype.map((item,index) => {
                              return <Option key={index} value={item.value}>{item.label}</Option>
                          })}
                      </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="querydateid"
                      label="查询日期类型"
                  >   
                      <div className={styles.dateSelection}>
                        <Select placeholder="Please select an owner" style={{width: 100}}>
                            {datetype && datetype.length && datetype.map((item,index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })}
                        </Select>
                        <Input allowClear style={{width:100,marginLeft:8}}/><p>天之前</p>
                      </div>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="type"
                  label="工作表名称"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                  >
                    <Input placeholder="Please enter user name"  allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="ip"
                  label="文件名称"
                  rules={[{
                      required: true, 
                      message: 'Please choose the type' 
                  }]}
                  >
                    <Input placeholder="Please enter IP" allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="port"
                  label="发送日期"
                  // rules={[{
                  //     // required: true, 
                  //     message: 'Please choose the type' 
                  // }]}
                  >
                    <Select placeholder="Please select an owner">
                      <Option value="option1">option1</Option>
                    </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="path"
                  label="文件类型"
                  // rules={[{ message: 'Please choose the dateTime' }]}
                  >
                    <Select placeholder="Please select an owner">
                      <Option value="option1">option1</Option>
                        {/* {transtype && transtype.length && transtype.map((item,index) => {
                            return <Option key={index} value={item.value}>{item.lable}</Option>
                        })} */}
                    </Select>
                  </Form.Item>
              </Col>
            </>): 
            (<>
              <Col span={12}>
                    <Form.Item
                    name="mId"
                    label="模块ID"
                    rules={[{ required: true, message: `username is required! Please enter user name` }]}
                    >
                    <Input placeholder="Please enter user name"  allowClear/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item
                      name="querytypeid"
                      label="查询数据类型"
                      // rules={[
                      // {
                      //     // required: true,
                      //     message: 'Please input your password!',
                      // },
                      // ]}
                  >
                      <Select placeholder="Please select an owner">
                          {datatype && datatype.length && datatype.map((item,index) => {
                              return <Option key={index} value={item.value}>{item.label}</Option>
                          })}
                      </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="querydateid"
                        label="查询日期类型"
                    >   
                        <div className={styles.dateSelection}>
                          <Select placeholder="Please select an owner" style={{width:80}}>
                            {datetype && datetype.length && datetype.map((item,index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })}
                          </Select>
                          <Input allowClear style={{width:100,marginLeft:8}}/><p>天之前</p>
                        </div>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                    name="type"
                    label="工作表名称"
                    rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                      <Input placeholder="Please enter user name"  allowClear/>
                    </Form.Item>
                </Col>
            </>)}
        </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};
export default connect(
    
)(AdvancedSearchForm);