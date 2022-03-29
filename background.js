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