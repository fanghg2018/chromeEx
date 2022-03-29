chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if(request.type == 'cmd') {
    chrome.windows.create(
      {
        url:"index.html",
        width: 1440,
        height: 968,
        type:"popup"
      },(tabs)=>{
        console.log(tabs);

  })
}

})

 
//接受连接
chrome.runtime.onConnect.addListener(port => {
  //监听连接消息
  port.onMessage.addListener(msg => {
    //收到消息 执行函数
    console.log(msg);
    
  });
});


chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details.url);
    
    return { redirectUrl: chrome.extension.getURL("hook.js") }; // 替换后的JS路径；如果是资源文件，需要 chrome.extension.getURL()
  },
  {
    urls: ["http://127.0.0.1:5500/2.js"],  // 被拦截的URL，可以多个
    types: ["script"]       // 被拦截的文件类型
  },
  ["blocking"] // 拦截方式
);