chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://portal.ubif.net/api/workorders*"]},
    ["blocking"]
  );