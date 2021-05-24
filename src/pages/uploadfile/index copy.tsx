import React, { FC, useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Radio, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import {http} from "itlead";

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  dicId: number | string;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

type ResType = {
    fieldDoc: string;
    fieldName: string;
    fieldValue: number | string;
    id: number | string;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  dicId,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [type, setType] = useState<ResType[]>([])
  const [fileList, setFileList] = useState([])

  const uploadConfigs = {
    name: "uploadFile",
    action: 'http://10.0.11.29:82/v1/salesmanInfo/upload/salesmanInfo',
    // data: {type: 1},
    // action: Configs.serviceUrl+'/v1/rule/manage/import',
    // maxCount: 1,
    // beforeUpload: file => {
    //     if (file.type !== 'image/png') {
    //       message.error(`${file.name} is not a png file`);
    //     }
    //     return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    //   },
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    progress: {
        strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
    // showUploadList: false,
    multiple: true,
};

  const uploadOptions = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList)
    },
    beforeUpload: file => {
      setFileList(...fileList, file)
      return false;
    },
    fileList,
  };

  useEffect(() => {
    fetch(`https://test-sip-gateway.gzmpc.com/rest/dataflow/api/data/dict/getDataDictValue/105`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'content-type': 'application/json',
              'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiYXNlUm9sZSI6IkFETUlOIiwiY3VycmVudFRpbWVNaWxsaXMiOiIxNjIwNzM3MTc5ODI2IiwiZXhwIjoxNjIwNzQ5MTc5LCJhY2NvdW50IjoiMSJ9.IvRvn2odaO5qRAJXIkJmH-rC9WFncW1QjC9siiHYBjs',
              'x-role-header': 'ADMIN',
              'x-userid-header': '1'
            },
          })
          .then( res => {
              return res.json()
          })
          .then(result => {
            console.log("字典响应",result);
            const { data } = result
            setType(data)
            // this.setState({conditions: data})
          })
  }, [])

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.file;
  };

  return (
    <Modal
      visible={visible}
      title="导入"
      okText="提交"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        //   console.log("@@@",form.validateFields())
        form
          .validateFields()
          .then(values => {
              console.log("#$#$",values)
              console.log("@@@@",form.resetFields())
            // form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ type: type.length>0 && type[0].fieldValue }}
      >
        <Form.Item 
            name="type" 
            className="collection-create-form_last-form-item"
            >
            <Radio.Group>
                { type !== [] && (type || []).map( item => {
                    console.log("item",item);
                    return <Radio key={item.id} value={item.fieldValue}>{item.fieldName}</Radio>
                })
                }
            </Radio.Group>
        </Form.Item>

        <Form.Item
            name="uploadFile"
            valuePropName="file"
            getValueFromEvent={normFile}
            extra="只支持扩展名：.xls"
            rules={[{ required: true, message: '请选择上传文件' }]}
            >
            {/* <Upload {...uploadConfigs}> */}
            <Upload {...uploadOptions}>
            <Button icon={<UploadOutlined />}>上传文件</Button>
            </Upload>
        </Form.Item>

      </Form>
    </Modal>
  );
};

type CollectionsPageTypes = {
    dicId: number | string;
}

const CollectionsPage : FC<CollectionsPageTypes> = (props) => {
  const [visible, setVisible] = useState(false);

  const uploadXlsx = (type,uploadFile) => {

    const formData = new FormData();
    formData.append('uploadFile', uploadFile);
    formData.append('type', type);
    console.log("formData0", formData);
    console.log("formData@@@@", typeof(formData));
    console.log("formData????", formData instanceof FormData)
    
    
    
    fetch(`http://10.0.11.29:82/v1/salesmanInfo/upload/salesmanInfo`,{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          body: formData,
        })
    // http.post(`http://10.0.11.29:82/v1/salesmanInfo/upload/salesmanInfo`,formData)
  }

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    const { type, uploadFile } = values
    const { originFileObj } = uploadFile
    uploadXlsx(type, originFileObj)
    setVisible(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >导入</Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        dicId={props.dicId}
      />
    </div>
  );
};

export default CollectionsPage