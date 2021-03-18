/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export class HideSideBar extends Component {
  render() {
    return (
      <>
        <h2>不展示侧边栏</h2>
        <h4>当路由下没有子路由的情况时，只在顶部导航栏中显示，不显示侧边栏</h4>
        <h4>当路由下还有子路由的情况的时候，在顶部导航栏中展示其一级路由，在侧边栏中展示其二级路由(自动分割菜单功能)</h4>
      </>
    );
  }
}

export default HideSideBar
