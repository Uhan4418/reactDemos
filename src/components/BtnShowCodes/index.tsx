import { Button, Input } from "antd";
import React, { FC, useState } from "react";
import styles from './style.less'

const { TextArea } = Input;

type PropsType = {
  codes: string
}

const ShowCodes: FC<PropsType> = (props) => {
  const [showText, setShowText] = useState<boolean>(false);

  const text = props.codes;

  const handleChange = () => {
    setShowText(!showText)
  }

  return (
    <>
      <hr/>
      {
        showText 
        ? 
        <Button onClick={handleChange} style={{marginBottom:8}}>点击收起代码</Button>
        :
        <Button onClick={handleChange}>点击查看代码</Button>
      }
      {showText && <TextArea value={text} rows={26} style={{width:'80%',backgroundColor:'#282C34', color:'white', borderRadius: '1.5%', resize: "none", display: "block"}}/>}
    </>
  )
}

export default ShowCodes;