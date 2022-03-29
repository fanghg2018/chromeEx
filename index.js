

      //建立通道
      const port = chrome.runtime.connect({});
      //发送消息
      port.postMessage({code: 'hello'});