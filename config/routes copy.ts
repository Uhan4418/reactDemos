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
            routes: [
              {
                path: '/procomponents',
                redirect: '/procomponents/controlledmode',
              },
              {
                name: '受控模式',
                icon: 'FileDoneOutlined',
                path: '/procomponents/controlledmode',
                component: './procomponents/controlledmode',
                exact: false,
              },
              {
                name: '可编辑ProTable',
                icon: 'SolutionOutlined',
                path: '/procomponents/editableprotable',
                component: './procomponents/editableProTable',
                exact: false,
              },
              {
                name: '表格轮询',
                icon: 'SolutionOutlined',
                path: '/procomponents/tablepolling',
                component: './procomponents/tablepolling',
                exact: false,
              },
              {
                name: 'ToolBar自定义',
                icon: 'SolutionOutlined',
                path: '/procomponents/toolbarcustom',
                component: './procomponents/toolbarcustom',
                exact: false,
              },
              {
                name: 'ValueType_数字类',
                icon: 'SolutionOutlined',
                path: '/procomponents/valuetypenumber',
                component: './procomponents/valuetype_number',
                exact: false,
              },
              {
                name: 'ValueType_样式类',
                icon: 'SolutionOutlined',
                path: '/procomponents/valuetypestyle',
                component: './procomponents/valuetype_style',
                exact: false,
              },
              {
                name: '高级表单',
                icon: 'SolutionOutlined',
                path: '/procomponents/proformweditable',
                // component: './procomponents/proformWeditable',
                // exact: false,
                routes: [
                  
                ]
              },
              {
                name: '高级表单和可编辑表格',
                icon: 'SolutionOutlined',
                path: '/procomponents/proformweditable',
                component: './procomponents/proformWeditable',
                exact: false,
              },
              {
                name: '高级表单的layout切换',
                icon: 'SolutionOutlined',
                path: '/procomponents/proformlayout',
                component: './procomponents/proformlayout',
                exact: false,
              },
              {
                name: '自定义表单提交按钮',
                icon: 'SolutionOutlined',
                path: '/procomponents/customform',
                component: './procomponents/customform',
                exact: false,
              },
              {
                name: '表单展开方式的控制',
                icon: 'SolutionOutlined',
                path: '/procomponents/showproform',
                component: './procomponents/proformvisibleorsetvisible',
                exact: false,
              },
            ],
          },
          // {
          //   name: 'list.table-list',
          //   icon: 'table',
          //   path: '/list',
          //   component: './ListTableList',
          // },
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
