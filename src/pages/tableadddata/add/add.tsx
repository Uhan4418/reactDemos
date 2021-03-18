import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { connect } from 'umi';

interface Values {
  title: string;
  description: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="添加供应商"
      okText="添加"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        name="新增供应商"
      >
        <Form.Item
          label="供应商ID"
          name="supplyid"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
            label="使用者ID" 
            name="userid" 
            rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
            <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    console.log('Received values of form: ', values);   
    // 1.提交表单
        //  调添加供应商接口
    // 2.关闭并刷新供应商列表数据
    // 3.提交表单
    setVisible(false);
  };

  return (
        // style={styles.marginBottom8}
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        添加供应商
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default connect()(CollectionsPage)