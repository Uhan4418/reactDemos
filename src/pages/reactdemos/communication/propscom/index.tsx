/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button, Input } from 'antd';
import React, {FC, useState} from 'react'

const { TextArea } = Input;

type ThemedButtonPropsType = {
  theme: string
}

const Toolbar : FC<ThemedButtonPropsType> = (props: { theme: any; }) => {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

const ThemedButton: FC<ThemedButtonPropsType> = (props) => {
  const [showText, setShowText] = useState<boolean>(false);

  const text = `
  import { Button } from 'antd';
  import React, {FC} from 'react'
  
  type ThemedButtonPropsType = {
    theme: string
  }
  
  const Toolbar : FC<ThemedButtonPropsType> = (props: { theme: any; }) => {
    // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
    // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
    // 因为必须将这个值层层传递所有组件。
    return (
      <div>
        <ThemedButton theme={props.theme} />
      </div>
    );
  }
  
  const ThemedButton: FC<ThemedButtonPropsType> = (props) => {
    return (
      <>
        <Button theme={props.theme}>切换主题</Button>
      </>
    )
  }
  
  const PropsCom: FC = () => {
    return (
      <>
        <Toolbar theme="dark" />;
      </>
    )
  
  } 
  
  export default PropsCom
  `;

  const handleChange = () => {
    setShowText(!showText)
  }

  return (
    <>
      {
        showText 
        ? 
        <Button theme={props.theme} onClick={handleChange} style={{marginBottom:8}}>props通信，点击收起代码</Button>
        :
        <Button theme={props.theme} onClick={handleChange}>props通信，点击查看代码</Button>
      }
      {showText && <TextArea value={text} rows={26}/>}
    </>
  )
}

const PropsCom: FC = () => {
  return (
    <>
      <Toolbar theme="dark" />
    </>
  )

} 

export default PropsCom