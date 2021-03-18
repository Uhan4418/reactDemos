/* eslint-disable no-console */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React,{FC} from "react";
import { Button, Input } from 'antd';

const { TextArea } = Input;


// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

// 中间的组件再也不必指明往下传递 theme 了。
const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ContextCom: FC = () => {
  // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;

  state = {
    showText: false,
    text: `
      import React,{FC} from "react";
      import { Button } from 'antd';
      
      // Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
      // 为当前的 theme 创建一个 context（“light”为默认值）。
      
      const ThemeContext = React.createContext('light');
      
      const ContextCom: FC = () => {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
          // 无论多深，任何组件都能读取这个值。
          // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
          return (
            <ThemeContext.Provider value="dark">
              <Toolbar />
            </ThemeContext.Provider>
          )
      }
      
      class ThemedButton extends React.Component {
        // 指定 contextType 读取当前的 theme context。
        // React 会往上找到最近的 theme Provider，然后使用它的值。
        // 在这个例子中，当前的 theme 值为 “dark”。
        static contextType = ThemeContext;
      
        render() {
          return <Button theme={this.context}>props通信，点击收起代码</Button>
        }
      }
      
      // 中间的组件再也不必指明往下传递 theme 了。
      const Toolbar = () => {
        return (
          <div>
            <ThemedButton />
          </div>
        );
      }
      
      
      export default ContextCom
    `,
    attentionText: `
      因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 value 属性总是被赋值为新的对象：

      class App extends React.Component {
        render() {
          return (
            <MyContext.Provider value={{something: 'something'}}>
              <Toolbar />
            </MyContext.Provider>
          );
        }
      }

      为了防止这种情况，将 value 状态提升到父节点的 state 里：
      
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            value: {something: 'something'},
          };
        }
      
        render() {
          return (
            <Provider value={this.state.value}>
              <Toolbar />
            </Provider>
          );
        }
      }
    `,
  };
  
  componentDidMount(){
    console.log('this',this)
  }
  
  handleChange = () => {
    this.setState({
      showText: !this.state.showText
    })
  }


  render() {
    // return <Button theme={this.context} onClick={this.handleChange}>props通信，点击收起代码</Button>
    return (
      <>
      {
        this.state.showText
        ? 
        <Button theme={this.context} onClick={this.handleChange} style={{marginBottom:8}}>props通信，点击收起代码</Button>
        :
        <Button theme={this.context} onClick={this.handleChange}>props通信，点击查看代码</Button>
      }
      <a href="https://react.docschina.org/docs/context.html" target="_blank" style={{marginLeft:8}}>详细了解context的使用</a>
      {this.state.showText && 
        <>
          <TextArea value={this.state.text} rows={26} style={{width:'80%',backgroundColor:'#282C34', color:'white', borderRadius: '1.5%', resize: "none"}}/>
          <h1>注意事项</h1>
          <TextArea value={this.state.attentionText} rows={26} style={{width:'80%',backgroundColor:'#282C34', color:'white', borderRadius: '1%', resize: "none"}} />
        </>
      }
    </>
    )
  }
}

export default ContextCom