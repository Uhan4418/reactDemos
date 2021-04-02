export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
              },
            ],
          },
          {
            path: '/hiddensidebar',
            name: '不展示侧边栏demo',
            icon: 'smile',
            component: './hiddensidebar',
          },
          {
            path: '/reactdemos',
            name: 'React Demos',
            icon: 'smile',
            routes: [
              {
                path: '/reactdemos',
                redirect: '/reactdemos/uncontrolledcom',
              },
              {
                path: '/reactdemos/communication',
                name: '组件通信',
                icon: 'smile',
                routes: [
                  {
                    path: '/reactdemos/communication/propscom',
                    name: 'props通信',
                    component: './reactdemos/communication/propscom',
                  },
                  {
                    path: '/reactdemos/communication/contextcom',
                    name: 'context通信',
                    component: './reactdemos/communication/contextcom',
                  },
                  {
                    path: '/reactdemos/communication/contextdemos/contextdynamic',
                    name: '动态context',
                    component: './reactdemos/communication/contextdemos/contextwithDynamic',
                  },
                  {
                    path: '/reactdemos/communication/contextdemos/contextUpdateInCom',
                    name: '在嵌套组件中更新Context',
                    component: './reactdemos/communication/contextdemos/contextUpdateInCom',
                  },
                ]
              },
              {
                path: '/reactdemos/refsdemos',
                name: 'Refs',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/refsdemos/addrefsfordom',
                    name: '为DOM元素添加ref',
                    component: './reactdemos/refsdemos/addrefsfordom',
                    icon: 'setting',  //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/addrefsforclass',
                    name: '为class组件添加ref',
                    component: './reactdemos/refsdemos/addrefsforclass',
                    icon: 'setting',  //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/refswithfc',
                    name: 'Refs与函数组件',
                    component: './reactdemos/refsdemos/refswithFC',
                    icon: 'setting',  //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/refsdemos/callbackrefs',
                    name: '回调Refs(过时)',
                    component: './reactdemos/refsdemos/callbackrefs',
                    icon: 'setting',  //  icon在次层级已不生效
                  },
                ]
              },
              {
                path: '/reactdemos/errorBoundariesDemo',
                name: '错误边界',
                icon: 'setting',
                component: './reactdemos/errorBoundariesDemo',
              },
              {
                path: '/reactdemos/fragmentdemos',
                name: 'Fragment的使用',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/fragmentdemos/fragmentcommon',
                    name: 'Fragment的用法',
                    component: './reactdemos/fragmentdemos/fragmentcommon',
                  },
                  {
                    path: '/reactdemos/fragmentdemos/fragmentusebykey',
                    name: '带key的fragment',
                    component: './reactdemos/fragmentdemos/fragmentusebykey',
                  },
                ]
              },
              {
                path: '/reactdemos/controlledcom',
                name: '受控组件',
                icon: 'smile',
                component: './reactdemos/controlledcom',
              },
              {
                path: '/reactdemos/uncontrolledcom',
                name: '非受控组件',
                icon: 'smile',
                component: './reactdemos/uncontrolledcom',
              },
              {
                path: '/reactdemos/formdemo',
                name: 'form表单',
                icon: 'table',
                component: './reactdemos/formdemo',
              },
              {
                path: '/reactdemos/stateUpgrade',
                name: '状态提升',
                icon: 'setting',
                component: './reactdemos/stateUpgrade',
              },
              {
                name: '代码分割',
                icon: 'setting',
                routes: [
                  {
                    path: '/reactdemos/lazyRender',
                    name: '懒加载',
                    component: './reactdemos/lazyrender',
                    icon: 'setting',  //  icon在次层级已不生效
                  },
                  {
                    path: '/reactdemos/errorboundaries',
                    name: '异常捕获边界',
                    component: './reactdemos/errorboundaries',
                  },
                  {
                    path: '/reactdemos/codeDiving',
                    name: '路由代码分割',
                    component: './reactdemos/codeDiving',
                  }
                ]
              },
            ]
          },
          {
            name: 'Ant Demos',
            icon: 'SmileOutlined',
            path: '/demos',
            routes: [
              {
                path: '/demos',
                redirect: '/demos/drawerdemo',
              },
              {
                path: '/demos/drawerdemo',
                name: 'Collapse demo1',
                icon: 'smile',
                component: './drawerdemo',
              },
              {
                path: '/demos/tableadddata',
                name: '表格添加',
                icon: 'smile',
                component: './tableadddata',
              },
              {
                path: '/demos/moduleconfig',
                name: 'Collapse demo2',
                icon: 'smile',
                component: './moduleconfig',
              },
              {
                path: '/demos/formdemo',
                name: '表单demo',
                icon: 'smile',
                component: './formdemo',
              },
              {
                path: '/demos/authoritydemo',
                name: '权限例子',
                icon: 'smile',
                component: './authoritydemo',
              },
              {
                path: '/demos/jsxdemo',
                name: 'jsx例子',
                icon: 'smile',
                component: './jsxdemo',
              },
              {
                path: '/demos/reactdemo',
                name: 'react小例子',
                icon: 'smile',
                component: './reactdemo',
              },
            ]
          },
          {
            name: 'ProComponents',
            icon: 'SmileOutlined',
            path: '/procomponents',
            component: './procomponents/controlledmode',
            routes: [
              // {
              //   path: '/procomponents',
              //   redirect: '/procomponents/controlledmode',
              // },
              {
                name: '高级表格',
                icon: 'SolutionOutlined',
                path: '/protable',
                routes: [
                  {
                    name: '受控模式',
                    icon: 'FileDoneOutlined',
                    path: '/protable/controlledmode',
                    component: './procomponents/controlledmode',
                    exact: false,
                  },
                  {
                    name: '可编辑ProTable',
                    icon: 'SolutionOutlined',
                    path: '/protable/editableprotable',
                    component: './procomponents/editableProTable',
                    exact: false,
                  },
                  {
                    name: '表格轮询',
                    icon: 'SolutionOutlined',
                    path: '/protable/tablepolling',
                    component: './procomponents/tablepolling',
                    exact: false,
                  },
                  {
                    name: 'ToolBar自定义',
                    icon: 'SolutionOutlined',
                    path: '/protable/toolbarcustom',
                    component: './procomponents/toolbarcustom',
                    exact: false,
                  },
                  {
                    name: 'ValueType_数字类',
                    icon: 'SolutionOutlined',
                    path: '/protable/valuetypenumber',
                    component: './procomponents/valuetype_number',
                    exact: false,
                  },
                  {
                    name: 'ValueType_样式类',
                    icon: 'SolutionOutlined',
                    path: '/protable/valuetypestyle',
                    component: './procomponents/valuetype_style',
                    exact: false,
                  },
                ]
              },
              {
                name: '高级表单',
                icon: 'SolutionOutlined',
                path: '/proform',
                routes: [
                  // {
                  //   path: '/proform',
                  //   redirect: '/proform/proformWeditable',
                  // },
                  {
                    name: '高级表单和可编辑表格',
                    icon: 'SolutionOutlined',
                    path: '/proform/proformweditable',
                    component: './procomponents/proformWeditable',
                  },
                  {
                    name: '高级表单的layout切换',
                    icon: 'SolutionOutlined',
                    path: '/proform/proformlayout',
                    component: './procomponents/proformlayout',
                  },
                  {
                    name: '自定义表单提交按钮',
                    icon: 'SolutionOutlined',
                    path: '/proform/customform',
                    component: './procomponents/customform',
                  },
                  {
                    name: '表单展开方式的控制',
                    icon: 'SolutionOutlined',
                    path: '/proform/showproform',
                    component: './procomponents/proformvisibleorsetvisible',
                    exact: false,
                  },
                ]
              },
            ],
          },
          {
            name: '高级表格',
            icon: 'SolutionOutlined',
            path: '/protable',
            routes: [
              {
                path: '/protable',
                redirect: '/protable/controlledmode',
              },
              {
                name: '受控模式',
                icon: 'FileDoneOutlined',
                path: '/protable/controlledmode',
                component: './procomponents/controlledmode',
                exact: false,
              },
              {
                name: '可编辑ProTable',
                icon: 'SolutionOutlined',
                path: '/protable/editableprotable',
                component: './procomponents/editableProTable',
                exact: false,
              },
              {
                name: '表格轮询',
                icon: 'SolutionOutlined',
                path: '/protable/tablepolling',
                component: './procomponents/tablepolling',
                exact: false,
              },
              {
                name: 'ToolBar自定义',
                icon: 'SolutionOutlined',
                path: '/protable/toolbarcustom',
                component: './procomponents/toolbarcustom',
                exact: false,
              },
              {
                name: 'ValueType_数字类',
                icon: 'SolutionOutlined',
                path: '/protable/valuetypenumber',
                component: './procomponents/valuetype_number',
                exact: false,
              },
              {
                name: 'ValueType_样式类',
                icon: 'SolutionOutlined',
                path: '/protable/valuetypestyle',
                component: './procomponents/valuetype_style',
                exact: false,
              },
            ]
          },
          {
            name: '高级表单',
            icon: 'SolutionOutlined',
            path: '/proform',
            routes: [
              {
                path: '/proform',
                redirect: '/proform/proformWeditable',
              },
              {
                name: '高级表单和可编辑表格',
                icon: 'SolutionOutlined',
                path: '/proform/proformweditable',
                component: './procomponents/proformWeditable',
              },
              {
                name: '高级表单的layout切换',
                icon: 'SolutionOutlined',
                path: '/proform/proformlayout',
                component: './procomponents/proformlayout',
              },
              {
                name: '自定义表单提交按钮',
                icon: 'SolutionOutlined',
                path: '/proform/customform',
                component: './procomponents/customform',
              },
              {
                name: '表单展开方式的控制',
                icon: 'SolutionOutlined',
                path: '/proform/showproform',
                component: './procomponents/proformvisibleorsetvisible',
                exact: false,
              },
            ]
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
