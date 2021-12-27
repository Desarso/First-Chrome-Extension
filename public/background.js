
extensionStatus={status:"off"}

chrome.runtime.onMessage.addListener(
  function(msg,sender,sendResponse){
    if (msg.status != "?"){ 
    console.log(msg);
    extensionStatus=msg
    // console.log(sender);
    sendResponse(extensionStatus)
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,extensionStatus)})
  }else {
    console.log(extensionStatus)
    sendResponse(extensionStatus)
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id,extensionStatus)})
  }

})


chrome.webRequest.onBeforeRequest.addListener(
  
  function(details) { 
    if (extensionStatus.status == "on"){ 
    return {cancel: true};} },
  {urls: ["*://portal.ubif.net/api/workorders*"]},
  ["blocking"]
);
  


chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id,{message:"on"})})