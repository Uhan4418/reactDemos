/* eslint-disable react/button-has-type */
import React, { FC } from "react";
import { HashRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import { useHistory } from "umi";




export const APP: FC = () => {

  return (
    <div>
      <Router>
        <NavLink to="/">首页</NavLink> |
          <NavLink to="/about">关于</NavLink> |
          <NavLink to="/login">登录</NavLink> |
          <NavLink to="/private">权限</NavLink> |

          <br />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/login" exact component={Login} />

          <PrivatePage path="/private" >
            <Private />
          </PrivatePage>
          <PrivatePage path="/about">
            <About />
          </PrivatePage>
        </Switch>
      </Router>
    </div>
  );
}

export default APP;

// 权限处理
// Private 登录后 可以进入，没有登录跳转到 login 登录页面
// Login 登录页面
// PrivatePage 页面（需要权限页面都包裹再里面）
// fakeAuth登录状态记录 isAuth 是否登录 | authentic 授权登录方法  signout 注销方法
const fakeAuth = {
  isAuto: false, // 默认非登录状态
  authentic(cb: { (): void; (...args: any[]): void; }) {
    this.isAuto = true;  // 登录状态
    setTimeout(cb, 200) // cb登录成功后要做的callback回调函数
  },
  signOut(cb: (...args: any[]) => void) {
    this.isAuto = false; // 非登录状态
    setTimeout(cb, 200) // cb注销成功后要做的callback回调函数
  }
}
// 所有需要权限页面都放入内部
function PrivatePage({ children }: { children: any }) {
  return <Route render={({ location }) => {
    // 此处应特别注意 要么使得children通过克隆完全继承,要不使用userhistory方法不然退出功能无法找到history方法
    // let component = React.cloneElement(children,rest);
    // chilren 基础了 父组件的所有属性 history，location，match，赋值给component
    // return fakeAuth.isAuth?component:<Redirect to={{pathname:"/login",state:{from:location}}}/>
    return fakeAuth.isAuto ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} /> // 将loacation赋值给from,传递过去
  }} />


}

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>关于</h1>
    </div>
  )
}
function Login(props: { location: { state: { from: { pathName: string; }; }; }; history: { replace: (arg0: any) => void; }; }) {
  const { from } = props.location.state || { from: { pathName: '/' } }
  // console.log(from,'上一个页面的loacation');
  // 通过props接收传递过来state也就是上一个页面的location ||默认首页
  return (
    <div>
      <h1>登录</h1>
      <button onClick={() => {
        fakeAuth.authentic(() => {
          props.history.replace(from)
        })
      }}>按钮</button>
    </div>
  )
}
function Private() {
  const history = useHistory();// 通过hooks方式拿到history

  return (
    <div>
      <p>需要权限的页面</p>
      <button onClick={() => {
        fakeAuth.signOut(
          // @ts-ignore
          history.replace('/login')
        )
      }}>退出</button>
    </div>
  )
}