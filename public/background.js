chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://portal.ubif.net/api/workorders*"]},
    ["blocking"]
  );

chrome.runtime.onMessage.addlistener(
  function(request,sender,sendResponse){
    console.log(request)
  }
)