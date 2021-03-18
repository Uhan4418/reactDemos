/* eslint-disable react/self-closing-comp */
import React, {FC} from 'react'
import ShowCodes from '@/components/BtnShowCodes'

function Glossary(props: { items: any[]; }) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}:</dt>
          <dd>{item.description}<br/><br/></dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

const FragementCom : FC = () => {

  const codes = `
  import React, {FC} from 'react'

  function Glossary(props: { items: any[]; }) {
    return (
      <dl>
        {props.items.map(item => (
          // 没有'key'，React 会发出一个关键警告
          <React.Fragment key={item.id}>
            <dt>{item.term}:</dt>
            <dd>{item.description}<br/><br/></dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }
  
  const FragementCom : FC = () => {
  
    const goods = [
      {term:'篮球', description:'约吗？我会扣篮'},
      {term:'排球', description:'我的排球是王萍教的'},
      {term:'游泳', description:'不就是躺着就能浮起来的事？'},
      {term:'羽毛球', description:'专注点，我的球速子弹才能跟上'}
    ]
  
    return (
      <>
        <Glossary items={goods}></Glossary>
      </>
    )
  }
  
  export default FragementCom
  `

  const goods = [
    {term:'篮球', description:'约吗？我会扣篮'},
    {term:'排球', description:'我的排球是王萍教的'},
    {term:'游泳', description:'不就是躺着就能浮起来的事？'},
    {term:'羽毛球', description:'专注点，我的球速子弹才能跟上'}
  ]

  return (
    <>
      <Glossary items={goods}></Glossary>
      <ShowCodes codes={codes}/>
    </>
  )
}

export default FragementCom