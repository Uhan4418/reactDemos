import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { connect } from 'umi';
import {
  addMarketNumberManageData,
  addMarketNumberManageFiled,
  deleteMarketNumberManageData,
  deleteMarketNumberManageDatas,
  deleteMarketNumberManageFiled,
  getMarketNumberManage,
  importMarketNumberManageData,
  updateMarketNumberManageData,
} from '@/pages/system/MarketNumberManage/service';
import { Button, Divider, Drawer, message, Modal } from 'antd';
import {
  DeleteOutlined,
  DiffOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import ProDescriptions from '@ant-design/pro-descriptions';
import AddFiledForm from '@/pages/system/MarketNumberManage/components/AddFiledForm';
import DeleteFiledForm from '@/pages/system/MarketNumberManage/components/DeleteFiledForm';
import AddDataForm from '@/pages/system/MarketNumberManage/components/AddDataForm';
import UpdateDataForm from '@/pages/system/MarketNumberManage/components/UpdateDataForm';
import ImportDataForm from '@/pages/system/MarketNumberManage/components/ImportDataForm';

const { confirm } = Modal;

class MarketNumberManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowsState: [],
      row: undefined,
      addFiledModalVisible: false,
      deleteFiledModalVisible: false,
      addDataModalVisible: false,
      updateDataModalVisible: false,
      updateDataFormValues: {},
      importDataModalVisible: false,
    };
    this.actionRef = React.createRef();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'marketNumberManage/fetch',
      payload: '',
    });
  }

  render() {
    const { data } = this.props;
    const column = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].english_name === 'serv_number') {
        column.push({
          title: data[i].chinese_name,
          dataIndex: data[i].english_name,
        });
      } else {
        column.push({
          title: `${data[i].chinese_name}(${data[i].english_name})`,
          dataIndex: data[i].english_name,
          hideInSearch: true,
        });
      }
    }
    column.push({
      title: '创建时间',
      dataIndex: 'create_times',
      valueType: 'dateTimeRange',
      hideInForm: true,
      render: (_, record) => record.create_times,
    });
    column.push({
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a onClick={() => this.setState({ row: record })}>详细信息</a>
          <Divider type="vertical" />
          <a
            onClick={() =>
              this.setState({
                updateDataModalVisible: true,
                updateDataFormValues: record,
              })
            }
          >
            修改记录
          </a>
          <Divider type="vertical" />
          <a>
            删除记录
          </a>
        </>
      ),
    });

    return (
      <PageContainer>
        <ProTable
          headerTitle=""
          actionRef={this.actionRef}
          rowKey="serv_number"
          search={{
            labelWidth: 120,
          }}
          toolBarRender={() => [
            <Button
              key="addData"
              onClick={() => {
                this.setState({
                  addDataModalVisible: true,
                });
              }}
            >
              <PlusOutlined /> 新增记录
            </Button>,
          ]}
          request={(params, sorter, filter) => getMarketNumberManage({ ...params, sorter, filter })}
          columns={column}
          rowSelection={{
            onChange: (_, selectedRows) => this.setState({ selectedRowsState: selectedRows }),
          }}
        />
        {this.state.selectedRowsState?.length > 0 && (
          <FooterToolbar
            extra={
              <div>
                已选择{' '}
                <a
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {this.state.selectedRowsState.length}
                </a>{' '}
                项&nbsp;&nbsp;
              </div>
            }
          >
            <Button
              onClick={async () => {
                await handleRemoveData(this.state.selectedRowsState);
                this.setState({ selectedRowsState: [] });
                this.actionRef.current?.reloadAndRest?.();
              }}
            >
              批量删除记录
            </Button>
          </FooterToolbar>
        )}
        <Drawer
          width={600}
          visible={!!this.state.row}
          onClose={() => {
            this.setState({ row: undefined });
          }}
          closable={false}
        >
          {this.state.row?.serv_number && (
            <ProDescriptions
              column={1}
              title={this.state.row?.serv_number}
              request={async () => ({
                data: this.state.row || {},
              })}
              params={{
                number: this.state.row?.serv_number,
              }}
              columns={column}
            />
          )}
        </Drawer>
      </PageContainer>
    );
  }
}

export default connect(({ marketNumberManage }) => ({
  data: marketNumberManage.current,
}))(MarketNumberManage);