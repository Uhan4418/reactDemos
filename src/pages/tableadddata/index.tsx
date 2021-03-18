import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import AddSuppler from './add/add'
import styles from './index.less'

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  // console.log("EditableRow",props)
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  // console.log("EditableCell title###",title)
  // console.log("EditableCell editable###",editable)
  // console.log("EditableCell children###",children)
  // console.log("EditableCell dataIndex###",dataIndex)
  // console.log("EditableCell record###",record)
  // console.log("EditableCell handleSave###",handleSave)
  // console.log("EditableCell restProps###",restProps)

  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      console.log("save保存", record, values);
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
  }
  // console.log("restProps@@@",restProps)
  // console.log("childNode@@@",childNode)
  return <td {...restProps}>{childNode}</td>;
};

export class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '供应商ID',
        dataIndex: 'supplyid',
        editable: true,
      },
      {
        title: '使用者ID',
        dataIndex: 'userid',
        // editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="确定删除吗?" onConfirm={() => this.handleDelete(record.key)}>
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          supplyid: 'Edward King 0',
          userid: '32',
        },
        {
          key: '1',
          supplyid: 'Edward King 1',
          userid: '32',
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  // handleAdd = () => {
  //   const { count, dataSource } = this.state;
  //   const newData = {
  //     key: count,
  //     supplyid: `Edward King ${count}`,
  //     userid: 32,
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // };

  handleSave = (row) => {
    console.log("row", row)
    const newData = [...this.state.dataSource];
    console.log("newData of handleSave", newData)
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    console.log("index,item", index, item)
    newData.splice(index, 1, { ...item, ...row });
    console.log("newData***", newData)
    console.log("newData[index]***", newData[index])

    // 保存修改行



    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      // console.log("col",col)
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div>
        {/* <Button
          onClick={this.handleAdd}
          type="primary"
        >
          新增
        </Button> */}
        <AddSuppler />
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

EditableTable.wrappers = ['@/wrappers/auth']

export default EditableTable
