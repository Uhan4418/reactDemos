import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Select, Tooltip, message } from 'antd';
import { DownOutlined, ExclamationCircleOutlined, UpOutlined } from '@ant-design/icons';
import { connect } from 'umi';
const { Option } = Select;
import styles from './index.less'

const suffix = [
  {label:"年月日时分秒", value:"[yyyyMMddHHmmss]"},
  {label:"年月日", value:"[yyyyMMdd]"},
  {label:"年周", value:"[yyyyww]"},
]

const datetype = [
  {label:"昨天", value:1},
  {label:"当月", value:2},
  {label:"当年", value:3},
  {label:"其他", value:4},
]

const sendRegular = [
  {label:"每天", value:0},
  {label:"周一", value:1},
  {label:"周二", value:2},
  {label:"周三", value:3},
  {label:"周四", value:4},
  {label:"周五", value:5},
  {label:"周六", value:6},
  {label:"周日", value:7},
  {label:"每个月第一天", value:8},
  {label:"每个月的哪几天", value:9},  //4,3,2
  {label:"每个月的哪一周的哪些天", value:10},   //4:6,4,5;2:3,4;1:3,5;
  {label:"每个月的最后一天", value:11},
]

const datatype = [
  {label:"销售数据", value:1},
  {label:"进货数据", value:2},
  {label:"库存数据", value:3},
  {label:"其他出入库数据", value:4},
]

const filetype = [
  {label:"xls", value:1},
  {label:"csv", value:2},
  {label:"xml", value:3},
  {label:"xlsx", value:4},
]

interface ConfigValue {
  currentdate ?: "昨天" | "当月" | "当年" | "其他";
}

interface ConfigFormProps {
  value?: ConfigValue;
  onChange?: (value: ConfigValue) => void;
}

const ConfigForm: React.FC<ConfigFormProps> = (props,{ value = {}, onChange }) => {
  console.log("ConfigForm",props)

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [form] = Form.useForm();
  const [currentdate, setCurrentDate] = useState("其他");
  const [senddate, setSendDate] = useState(null);
  const [senddates, setSendDates] = useState(null);
  const [days, setDays] = useState(false);
  const [weekdays, setWeekDays] = useState(false);
  const [week, setWeek] = useState(null);
  const [day, setDay] = useState<string>(null);

  const onFinish = values => {
    console.log('Received values of form: ', values);
    let {excelName, fileType, queryDateId, qBeginDate, querytypeId, sendDate, sheetName, suffix} = values;
    let sendDates = null;
    // excelName: "testFile"
    // fileType: 3
    // queryDateId: 2
    // querytypeId: 2
    // sendDate: 4
    // sheetName: "testSheet"
    // suffix: "[yyyyMMdd]"
    excelName = `${excelName}_${suffix}`
    if(queryDateId !==1 && queryDateId !==2 && queryDateId !==3 && queryDateId !==4 ){
      queryDateId = 4
    }

    if(senddate === 9 && day){
      sendDates = `${day}`
    }else if(senddate === 10 && week && day){
      sendDates = `${week}:${day}`
    }

    if(queryDateId === 4 ){
      const payload = {
        pId: props.pid,
        fileType,
        queryDateId,
        qBeginDate,
        querytypeId,
        sendDate: senddate,
        sendDates,
        sheetName,
        excelName
      }
      console.log("payload!!!",payload)
      // props.addmodule(payload,props.pid)
    }else{
      const payload = {
        pId: props.pid,
        fileType,
        queryDateId,
        querytypeId,
        sendDate: senddate,
        sendDates,
        sheetName,
        excelName
      }
      console.log("payload!!!",payload)
      // props.addmodule(payload,props.pid)
    }
  };

  const triggerChange = changedValue => {
    if (onChange) {
      onChange({ currentdate, ...value, ...changedValue });
    }
  };

  const OnDateChange = val => {
    // console.log("SelectiononChange",val)
    if (!('currentdate' in value)) {
      setCurrentDate(val);
    }
    if(val === 4){
      setShowInput(true)
      setCurrentDate("其他")
    }else{
      setShowInput(false)
    }
    triggerChange({ currentdate: val });
  }

  const hideInput = val => {
    if(val === 4){
      setShowInput(true)
    }else{
      form.resetFields();
      setShowInput(false)
    }
  }

  const regularOnChange = val => {
    console.log("regularOnChange",val)
    switch(val){
      case 0:
        setSendDate(0);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 1:
        setSendDate(1);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 2:
        setSendDate(2);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 3:
        setSendDate(3);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 4:
        setSendDate(4);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 5:
        setSendDate(5);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 6:
        setSendDate(6);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 7:
        setSendDate(7);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 8:
        setSendDate(8);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 9:
        setSendDate(9);
        setDays(true);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 10:
        setSendDate(10);
        setWeekDays(true);
        setDays(false);
        setWeek(null);
        setDay(null)
        break;
      case 11:
        setSendDate(11);
        setDays(false);
        setWeekDays(false);
        setWeek(null);
        setDay(null)
        break;
        }
  }
   
  const dayInput = (e) => {
    console.log("dayInput",e.target.value)
    if(senddate === 10){
      if(e.target.value <=0 || e.target.value > 7){
        message.warning("请输入有效天数")
        return false
      }else{
        setDay(e.target.value)
      }
    }else{
      if(e.target.value <=0 || e.target.value > 31){
        message.warning("请输入有效天数")
        return false
      }else{
        setDay(e.target.value)
      }
    }
    
  }
   
  const weekInput = (e) => {
    console.log("weekInput",e.target.value)
    if(e.target.value <=0 || e.target.value > 4){
      message.warning("请输入有效周数")
      return false
    }else{
      setWeek(e.target.value)
    }
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
    >
        <Row gutter={24}>
          {expand ? 
            (<>
              <Col span={12}>
                  <Form.Item
                  name="excelName"
                  label="文件名称"
                  rules={[{
                      required: true, 
                      message: 'Please choose the type' 
                  }]}
                  >
                    <Input placeholder="请输入文件名称" allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="suffix"
                  label="文件后缀"
                  >
                    <Select>
                      {suffix && suffix.length && suffix.map((item,index) => {
                        return <Option key={index} value={item.value}>{item.label}</Option>
                      })}
                    </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="sheetName"
                  label="工作表名称"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                  >
                    <Input placeholder="请填写工作表名"  allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="queryDateId"
                      label="查询日期类型"
                  >   
                      {showInput ? 
                        <div className={styles.dateSelection}>
                          <Select  
                              value={value.currentdate || currentdate}
                              style={{width: 90}} 
                              onChange={hideInput}
                              >
                              {datetype && datetype.length && datetype.map((item,index) => {
                                  return <Option key={index} value={item.value}>{item.label}</Option>
                              })}
                          </Select>
                            <Form.Item
                          name="qBeginDate"
                          rules={[{
                              required: true, 
                              message: 'Please choose the type' 
                          }]}
                          >
                          <div className={styles.inputP}>
                          {/* <div style={{display:'flex', flexDirection:'row', alignItems:'baseline'}}> */}
                              <Input 
                                allowClear 
                                style={{width:120,marginLeft:8}}
                                /><p className={styles.pfont}>天之前</p>
                          </div>
                            </Form.Item>
                        </div>
                         : 
                        <Select 
                            value={value.currentdate || currentdate}
                            onChange={OnDateChange}
                            >
                            {datetype && datetype.length && datetype.map((item,index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })}
                        </Select>
                      }
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="fileType"
                  label="文件类型"
                  >
                    <Select>
                      {filetype && filetype.length && filetype.map((item,index) => {
                        return <Option key={index} value={item.value}>{item.label}</Option>
                      })}
                    </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="querytypeId"
                      label="查询数据类型"    
                      >
                      <Select onChange={OnDateChange}>
                          {datatype && datatype.length && datatype.map((item,index) => {
                              return <Option key={index} value={item.value}>{item.label}</Option>
                          })}
                      </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="sendDate"
                  label="发送日期规则"
                  style={{display:"flex",flexDirection:"row"}}
                  >
                    <Select onChange={regularOnChange}>
                      {sendRegular && sendRegular.length && sendRegular.map((item,index) => {
                        return <Option key={index} value={item.value}>{item.label}</Option>
                      })}
                    </Select>
                    {weekdays ?
                      <div className={styles.regularContent}>
                        <Input onBlurCapture={weekInput}/>周  
                        <Input onBlurCapture={dayInput}/>天
                        <Tooltip title="用':'将周和天隔开,如需多选日期,用','隔开,例：4:6,4,5;2:3,4;1:3,5;">
                            <ExclamationCircleOutlined />
                        </Tooltip>
                      </div> : null
                    }
                    {days ? 
                      <div className={styles.regularContent}>
                        <Input onBlurCapture={dayInput}/>天
                        <Tooltip title="如需多选日期,用','隔开,例：4,3,2">
                            <ExclamationCircleOutlined />
                        </Tooltip>
                      </div> : null
                    }
                  </Form.Item>
              </Col>
            </>): 
            (<>
              <Col span={12}>
                  <Form.Item
                  name="excelName"
                  label="文件名称"
                  rules={[{
                      required: true, 
                      message: 'Please choose the type' 
                  }]}
                  >
                    <Input placeholder="请输入文件名称" allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="suffix"
                  label="文件后缀"
                  >
                    <Select>
                      {suffix && suffix.length && suffix.map((item,index) => {
                        return <Option key={index} value={item.value}>{item.label}</Option>
                      })}
                    </Select>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                  name="sheetName"
                  label="工作表名称"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                  >
                    <Input placeholder="请填写工作表名"  allowClear/>
                  </Form.Item>
              </Col>
              <Col span={12}>
                  <Form.Item
                      name="queryDateId"
                      label="查询日期类型"
                  >   
                      {showInput ? 
                        <div className={styles.dateSelection}>
                          <Select  
                              value={value.currentdate || currentdate}
                              style={{width: 90}} 
                              onChange={hideInput}
                              >
                              {datetype && datetype.length && datetype.map((item,index) => {
                                  return <Option key={index} value={item.value}>{item.label}</Option>
                              })}
                          </Select>
                            <Form.Item
                              name="qBeginDate"
                              rules={[{
                                  required: true, 
                                  message: 'Please choose the type' 
                              }]}
                              >
                              <div className={styles.inputP}>
                                  <Input 
                                    allowClear 
                                    style={{width:100,marginLeft:8}}
                                    /><p className={styles.pfont}>天之前</p>
                              </div>
                            </Form.Item>
                        </div>
                         : 
                        <Select 
                            value={currentdate}
                            onChange={OnDateChange}
                            >
                            {datetype && datetype.length && datetype.map((item,index) => {
                                return <Option key={index} value={item.value}>{item.label}</Option>
                            })}
                        </Select>
                      }
                  </Form.Item>
              </Col>
            </>)}
        </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} 更多
          </a>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            清除
          </Button>
          <Button type="primary" htmlType="submit" style={{marginRight: 8}}>
            配置
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default connect()(ConfigForm);