/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react'
import { Select } from 'antd';

const { Option } = Select;

const NameForm : FC = () => {
  const [val, setVal] = useState<string>('')
  
  const favorFruitOptions = [
    {value:"grapefruit", label:'葡萄柚'},
    {value:"lime", label:'酸橙'},
    {value:"coconut", label:'椰子'},
    {value:"mango", label:'芒果'}
  ]

  const handleChange = (value: any,item: { children: React.SetStateAction<string>; }) => {
    console.log('@@',value,item)
    setVal(item.children)
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    console.log('##',event);
    alert(`喜欢的水果是：${val}`)
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          选择你喜欢的风味:
          <Select defaultValue={favorFruitOptions[1].label} onChange={handleChange as any} style={{marginLeft:5}}>
            {favorFruitOptions && favorFruitOptions.length > 0 && 
              favorFruitOptions.map((item,index) => {
                console.log(item,index)
                return (
                  <Option key={index} value={item.value}>{item.label}</Option>
                )
              })
            }
          </Select>
        </label>
        <input type="submit" value="提交" style={{marginLeft:5}}/>
      </form>
  )
}

export default NameForm