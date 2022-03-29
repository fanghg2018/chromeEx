let btn = document.getElementById('btn')
let sfz = document.getElementById('sfz')
let xm = document.getElementById('xm')
let storage = chrome.storage.local;

//取身份证
storage.get({'sfz':sfz,'xm':xm}, function(items) {
  xm.value =items.xm
 })

//选择用户
xm.onchange=function(){
  sfz.innerHTML=xm.options[xm.selectedIndex].value
  saveStorage()
}

//存储sfz
function saveStorage(){
  storage.set({'sfz': sfz.value,'xm':xm.value})
}


//向content发消息
btn.onclick =   function(){
  chrome.runtime.sendMessage({type:'cmd',sfz:sfz.innerHTML})
  
}

