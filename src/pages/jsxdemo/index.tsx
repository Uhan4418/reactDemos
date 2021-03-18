// 调用子元素回调 numTimes 次，来重复生成组件
/* function Repeat(props: { numTimes: number; children: (arg0: number) => any; }) {
  const items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

export default ListOfTenThings */

import React, { lazy } from "react";

// const ModuleA = lazy(() => import('./test1/'))
// const ModuleB = lazy(() => import('./test2'))

import ModuleA from './test1'
import ModuleB from './test2'

// eslint-disable-next-line react/prefer-stateless-function
export default class Reservation extends React.Component {
  componentDidMount() {
    console.log(ModuleA, ModuleB)
  };

  render() {
    return (
      <>
        <div>?????</div>
        <ModuleA />
        <ModuleB />
      </>
    )
  }
}
