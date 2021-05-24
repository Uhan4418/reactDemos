import React, { Component } from "react";
import {
  Table,
  Button,
  Card,
  Tree,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { TreeNode } = Tree;

export default class Main extends Component {
  constructor(props) {
    super(props);
    const plainOptions = [
      {
        title: "表头1",
        key: "bt1"
      },
      {
        title: "表头2",
        key: "bt2"
      },
      {
        title: "表头3",
        key: "bt3"
      },
      {
        title: "表头4",
        key: "bt4"
      },
      {
        title: "表头5",
        key: "bt5"
      }
    ];// 模拟接口请求的字段列表
    const checkedOptions = ["bt1", "bt2", "bt3", "bt4", "bt5"];// 模拟接口请求的已选择字段
    this.state = {
      page_size: 10,
      page: 1,
      totalPage: 1,
      totalCount: 1,
      plainOptions, // 默认的字段列表
      checkedOptions, // 默认的已选择字段
      editPlainOptions: plainOptions, // 当前选择的字段列表，未保存
      editCheckedOptions: checkedOptions, // 当前已选择字段，未保存
      isClickHandleSearch:'',// 设置字段后在未保存的情况下点击空白区域字段重置
    };
  }

  onFilterDropdownVisibleChange = (visible, type) => {
    if (visible && !this.state.isClickHandleSearch) {
      this.setState({
        isClickHandleSearch: false
      });
    } else {
      this.setState({
        plainOptions: this.state.editPlainOptions,
        checkedOptions: this.state.editCheckedOptions
      });
    }
  };

  handleSearch = confirm => {
    // 确定 保存用户设置的字段排序和需要显示的字段key
    const { plainOptions, checkedOptions } = this.state;
    this.setState(
      {
        isClickHandleSearch: true,
        editPlainOptions: plainOptions,
        editCheckedOptions: checkedOptions
      },
      () => {
        console.log('###',this.state.editPlainOptions);
        confirm();
      }
    );
  };

  handleReset = clearFilters => {
    // 用户点击取消按钮，重置字段
    clearFilters();
    this.setState({
      plainOptions: this.state.editPlainOptions,
      checkedOptions: this.state.editCheckedOptions
    });
  };

  onCheck = (checkedKeys) => {
    this.setState({
      checkedOptions: checkedKeys
    });
  };

  onDrop = info => {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    if (dropPosition === 1 || dropPosition == -1) {
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...this.state.plainOptions];
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
      this.setState({
        plainOptions: data
      });
    }
  };

  render() {
    const {
      inquiry_list,
      page,
      page_size,
      totalCount,
      plainOptions,
      checkedOptions
    } = this.state;
    const loop = data =>
      data.map((item, index) => {
        return <TreeNode key={item.key} title={item.title} />;
      });
    const title_list = [
      {
        title: "表头1",
        dataIndex: "bt1",
        key: "bt1",
        width: 170,
        filterType: checkedOptions.some(item => item === "bt1")
      },
      {
        title: "表头2",
        dataIndex: "bt2",
        key: "bt2",
        width: 170,
        filterType: checkedOptions.some(item => item === "bt2")
      },
      {
        title: "表头3",
        dataIndex: "bt3",
        key: "bt3",
        width: 170,
        filterType: checkedOptions.some(item => item === "bt3")
      },
      {
        title: "表头4",
        dataIndex: "bt4",
        key: "bt4",
        width: 170,
        filterType: checkedOptions.some(item => item === "bt4")
      },
      {
        title: "表头5",
        dataIndex: "bt5",
        key: "bt5",
        width: 170,
        filterType: checkedOptions.some(item => item === "bt5")
      }
    ];
    const new_title_list = [];
    let scrollX = 0;
    plainOptions.map(item => {
      title_list.map(titleItem => {
        if (item.title === titleItem.title) {
          new_title_list.push(titleItem);
          if (
            titleItem.width &&
            checkedOptions.some(optionsItem => optionsItem === item.key)
          ) {
            scrollX += titleItem.width;
          }
        }
      });
    });
    scrollX += 160;
    new_title_list.push({
      title: "操作",
      key: "action",
      width: 160,
      align: "center",
      filterDropdown: ({ confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Tree
            checkable
            className="draggable-tree"
            draggable
            blockNode
            selectable={false}
            onCheck={this.onCheck}
            checkedKeys={checkedOptions}
            onDrop={this.onDrop.bind(this)}
          >
            {loop(plainOptions)}
          </Tree>
          <div>
            <Button
              type="primary"
              size="small"
              onClick={() => this.handleSearch(confirm)}
              style={{ width: "60px", marginRight: "10px" }}
            >
              确定
            </Button>
            <Button
              size="small"
              onClick={() => this.handleReset(clearFilters)}
              style={{ width: "60px" }}
            >
              取消
            </Button>
          </div>
        </div>
      ),
      // filterIcon: (filtered: any) => <Icon type="setting" theme="filled" />,
      filterIcon: (filtered: any) => <SettingOutlined  type="setting"/>,
      onFilterDropdownVisibleChange: this.onFilterDropdownVisibleChange.bind(
        this
      ),
      render: item => {
        return <div>查看</div>;
      }
    });
    return (
      <div>
        <Card>
          <Table
            rowKey="id"
            columns={new_title_list.filter(
              item => item.filterType || item.filterType === undefined
            )}
            dataSource={inquiry_list || []}
            pagination={{
              current: page,
              total: totalCount,
              pageSize: page_size,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "50", "100"],
              showTotal: this.showTotal
            }}
            scroll={{ x: scrollX }}
          />
        </Card>
      </div>
    );
  }
}