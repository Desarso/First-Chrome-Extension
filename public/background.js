
extensionStatus={status:"off"}



chrome.runtime.onMessage.addListener(
  function(msg,sender,sendResponse){
    if (msg.status != "?"){ 
    console.log(msg);
    //checking if the functions is off or not.
    //then setting msg which must be the function status to function status.
    //then I respond to with the function status. I always do.
    extensionStatus=msg
    // console.log(sender);
    sendResponse(extensionStatus)

    //I've no idea what this code does, what the hell gabe put some fucking comments pls.
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id,extensionStatus)})
  }else {

    //this crap also sends the extension status back
    console.log(extensionStatus)
    sendResponse(extensionStatus)
    //since this is in both options I am guessing thsi whole block of code is used to update the 
    //extension status. which is either on or off. One likely updates the popup.js script
    // while the other sends a message to content.js. 
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id,extensionStatus)})
  }

})



//this block of code listens to any webrequests, in this case it blocks the url api request when the extension is on

chrome.webRequest.onBeforeRequest.addListener(
  
  function(details) { 
    if (extensionStatus.status == "on"){ 
    return {cancel: true};} },
  {urls: ["*://portal.ubif.net/api/workorders*"]},
  ["blocking"]
);

  

//this block of code just straigh updates the app to be on. 
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id,{message:"on"})})
