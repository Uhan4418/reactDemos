import loadScriptOnce from 'load-script-once'

// 加载一次
function loadScriptOnceSync(src, success) {
  loadScriptOnce(src).then(() => {
    if (typeof success === 'function') {
      success()
    }
  })
}

export default loadScriptOnceSync