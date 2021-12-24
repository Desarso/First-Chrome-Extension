chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://portal.ubif.net/api/workorders*"]},
    ["blocking"]
  );
extensionStatus={status:"off"}
chrome.runtime.onMessage.addListener(
  function(msg,sender,sendResponse){
    if (msg.status != "?"){ 
    console.log(msg);
    extensionStatus=msg
    // console.log(sender);
    sendResponse(extensionStatus)
  }else {
    console.log(extensionStatus)
    sendResponse(extensionStatus)
  }

})


  