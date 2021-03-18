import React, { Suspense } from 'react';

// React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 default export 的 React 组件。

// 然后应在 Suspense 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

// fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。

/* 
Suspense的作用：
  1.OtherComponent是通过懒加载加载进来的，所以渲染页面的时候可能会有延迟，但使用了Suspense之后，可优化交互。
  
  2.在<OtherComponent />外面使用Suspense标签，并在fallback中声明OtherComponent加载完成前做的事，即可优化整个页面的交互 
*/

const AnotherComponent = React.lazy(() => import('../formdemo'));
const OtherComponent = React.lazy(() => import('../stateUpgrade'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        <hr/>
        <AnotherComponent />
      </Suspense>
    </div>
  );
}

export default MyComponent