import React, { Component } from 'react'
import { Spin } from 'antd'
import randomStr from '@/utils/randomStr' // 随机字符串封装'
import loadScriptOnceSync from '@/utils/loadScriptOnce'
// import Config from '../../../config/config'

let globalsid
class WXLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      scriptLoaded: false,
    }
  }

  async componentDidMount() {
    // console.log("Config",Config);
    await this.initScript()
    this.onOpenLogin()
    const that = this
    window.receiveMessageFromIndex = function (event) {
      if (event != undefined) {
        // 发送请求 event.data为微信信息对象 为对象类型再请求接口
        if (typeof event.data === 'object') {
          const WXCode = event.data.code
          // 没有code或已发请求 不重复请求，isLogining为是否在登录中判断值
          if (!WXCode || that.props.isLogining) return
          const body = {
            code: WXCode,
          }
          // 执行项目的登录流程
          that.props.loginWX(body)
        }
      }
    }
    // 监听来自iframe的message事件
    window.addEventListener('message', window.receiveMessageFromIndex, false)
  }

  componentWillUnmount() {
    window.removeEventListener('message', window.receiveMessageFromIndex)
  }

  initScript = () => {
    const WXLOGINJS_URL = 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
    loadScriptOnceSync(
      WXLOGINJS_URL,
      () => this.setState({ scriptLoaded: true }),
      () => console.log('加载完成')
    )
  }

  onOpenLogin = () => {
    const timer = setTimeout(() => {
      this.initWX()
      clearTimeout(timer)
    }, 2000)
  }

  initWX() {
    const sid = randomStr(5)
    globalsid = sid
    // new WxLogin({
    //   self_redirect: false,
    //   id:"login_container",
    //   // appid: "wx1b20ce47a96c7535",
    //   appid: "wxc653f0a8321798f5",
    //   scope: "snsapi_login",
    //   redirect_uri: "https%3a%2f%2fwww.jzqyyw.com%2f",
    //   state: 'globalsid',
    //   style: "black",
    //   href:  "data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30NCi5pbXBvd2VyQm94IC50aXRsZSB7ZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuaW5mbyB7d2lkdGg6IDI3MHB4O30="
    // })

    new WxLogin({
      self_redirect: true,
      id: 'login_container', 
      appid: 'wx1b20ce47a96c7535',
      scope: 'snsapi_login', // 写死，网页应用暂时只支持这个值
      redirect_uri: encodeURIComponent('https://test-sip.gzmpc.com/home'), // 扫码成功后重定向地址
      state: globalsid, // 随机字符串
      style: 'black',
      // base64加密的样式代码
	    href:'data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30NCi5pbXBvd2VyQm94IC50aXRsZSB7ZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuaW5mbyB7d2lkdGg6IDI3MHB4O30=',
    })
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    return (
	    <Spin spinning={isLoading}>
	      <div  onClick={this.onOpenLogin}>
	        <div id="login_container" style={{ textAlign: 'center' }} />
	      </div>
	    </Spin>
    )
  }
}

export default WXLogin