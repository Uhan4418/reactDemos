/* eslint-disable react/sort-comp */
import { Upload, Button, message, Modal, Radio, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

class ImportFile extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    isModalVisible: false,
    type: [],
    fileType: 1
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('uploadFile', file);
      formData.append('type', this.state.fileType as any);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76',{
      method: 'post',
      body: formData,
    }).then(res => {
      this.setState({
        fileList: [],
        uploading: false,
        isModalVisible: false
      });
      message.success('upload successfully.');
      console.log("上传成功响应",res);
    }).catch(err => {
      this.setState({
        uploading: false,
        isModalVisible: false
      });
      message.error('upload failed.');
      console.log("上传失败响应",err);
    })
  };

  onChange = (e: { target: { value: any; }; }) => {
    console.log('radio checked', e.target.value);
    this.setState({fileType: e.target.value})
  };

  showModal = () => {
    this.setState({isModalVisible: true})
  };

  handleOk = () => {
    this.setState({isModalVisible: true})
  };

  handleCancel = () => {
    this.setState({isModalVisible: false})
  };
  
  componentDidMount(){
    fetch(`https://test-sip-gateway.gzmpc.com/rest/dataflow/api/data/dict/getDataDictValue/105`,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'content-type': 'application/json',
              'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJiYXNlUm9sZSI6IkFETUlOIiwiY3VycmVudFRpbWVNaWxsaXMiOiIxNjIwNzg2NzEzMjE0IiwiZXhwIjoxNjIwNzk4NzEzLCJhY2NvdW50IjoiMSJ9.2KvlXU0J4ckbOXasTUGAOa9OSvlowz8TD0N7kMsHGro',
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
            this.setState({type: data})
            // this.setState({conditions: data})
          })
  }

  render() {
    const { uploading, fileList } = this.state;
    const uploadConfigs = {
      name: 'uploadFile',
      accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
      progress: {
          strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068',
          },
          strokeWidth: 3,
          format: (percent: number) => `${parseFloat(percent.toFixed(2))}%`,
      },
      multiple: true,
      onRemove: (file: any) => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file: any) => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
      maxCount: 1
    };

    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal 
          title="导入" 
          visible={this.state.isModalVisible} 
          onOk={this.handleOk} 
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button
              type="primary"
              onClick={this.handleUpload}
              disabled={fileList.length === 0}
              loading={uploading}
              style={{ marginTop: 16 }}
            >
              {uploading ? '上传中' : '上传'}
            </Button>
          ]}
          >
            <Space direction="vertical" size={20}>
              <Radio.Group onChange={this.onChange as any} value={this.state.fileType}>
                { this.state.type !== [] && this.state.type.map( item => {
                    console.log("item",item);
                    return <Radio key={item.id} value={item.fieldValue}>{item.fieldName}</Radio>
                  })
                }
              </Radio.Group>
              <Upload {...uploadConfigs as any}>
                <Button icon={<UploadOutlined />}>请选择文件</Button>
              </Upload>
            </Space>
            
        </Modal>
      </>
    );
  }
}

export default ImportFile
