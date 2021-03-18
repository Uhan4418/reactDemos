import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '好好学习，天天向上',
  pwa: false,
  iconfontUrl: '',
  menu: {
    "locale": false
  },
  splitMenus: true,
  headerHeight: 48,
  footerRender: false
};

export type { DefaultSettings };

export default proSettings;
