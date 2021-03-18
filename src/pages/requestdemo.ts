// 多任务调度
// 上一节我们提到的是多个任务的串行执行方式，这是业务中最常见的多任务执行方式，只需逐个yield call就可以了。

// 有的时候，我们可能会希望多个任务以另外一些方式执行，比如：

// 1. 并行，若干个任务之间不存在依赖关系，并且后续操作对它们的结果无依赖
// 2. 竞争，若干个任务之间，只要有一个执行完成，就进入下一个环节
// 2. 子任务，若干个任务，并行执行，但必须全部做完之后，下一个环节才继续执行

// 并行
const [result1, result2]  = yield all([
  call(service1, param1),
  call(service2, param2)
])
// 注意：上面代码中的那个：
// yield [];
// 不要写成：
// yield* [];
// 这两者含义是不同的，后者会顺序执行。

// 竞争
const { data, timeout } = yield race({
  data: call(service, 'some data'),
  timeout: call(delay, 1000)
});

if (data)
  put({type: 'DATA_RECEIVED', data});
else
  put({type: 'TIMEOUT_ERROR'});

// 这个例子比较巧妙地用一个延时一秒的空操作来跟一个网络请求竞争，如果到了一秒，请求还没结束，就让它超时。

// 这个类似于Promise.race的作用。

