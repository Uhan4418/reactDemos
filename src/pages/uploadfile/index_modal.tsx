import React, { FC, useEffect, useState } from 'react';
import { Modal, Button, Radio, Upload, Space } from 'antd';
import { http } from 'itlead';
import { UploadOutlined } from '@ant-design/icons';

type ImportType = {
  dicId: number | string;
}

type ResType = {
  fieldDoc: string;
  fieldName: string;
  fieldValue: number | string;
  id: number | string;
}

const Import: FC<ImportType> = ({
  dicId,
}) => {
  const [type, setType] = useState<ResType[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileTye, setFileTye] = React.useState(1);
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState<boolean>(false)

  // const [fileTye, setFileTye] = React.useState(type.length>0 && type[0].fieldValue);

  useEffect(() => {
    // http.get(`/api/data/dict/getDataDictValue/${dicId}`).then(res=>{
    //     res && setType(res)
    // })
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

  const props = {
    // onRemove: file => {
    //   this.setState(state => {
    //     const index = state.fileList.indexOf(file);
    //     const newFileList = state.fileList.slice();
    //     newFileList.splice(index, 1);
    //     return {
    //       fileList: newFileList,
    //     };
    //   });
    // },
    // beforeUpload: file => {
    //   this.setState(state => ({
    //     fileList: [...state.fileList, file],
    //   }));
    //   return false;
    // },
    // fileList,
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

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    setUploading(true)

    // You can use any AJAX library you like
    reqwest({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  };


  const uploadConfigs = {
    name: "uploadFile",
    action: 'http://10.0.11.29:82/v1/salesmanInfo/upload/salesmanInfo',
    data: {type: fileTye},
    maxCount: 1,
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    progress: {
        strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
    multiple: true,
  };

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setFileTye(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        导入
      </Button>
      <Modal 
        title="导入" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>
        ]}
        >
        <Space direction="vertical" size={20}>
          <Radio.Group onChange={onChange} value={fileTye}>
            { type !== [] && type.map( item => {
                console.log("item",item);
                return <Radio key={item.id} value={item.fieldValue}>{item.fieldName}</Radio>
              })
            }
          </Radio.Group>
          {/* <Upload {...uploadConfigs}>
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload> */}
          <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </>
        </Space>
      </Modal>
    </>
  );
};

export default Import;