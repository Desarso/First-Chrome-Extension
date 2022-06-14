chrome.runtime.onMessage.addListener((msg ,sender, response)=>{
    console.log(msg);
    console.log(response);
    // check every 100ms
    //I don't know why it chekcs every 100ms or how to change that.
    
})



//oh this functions is basically trying to remove the toast warning pop up very 100ms.

chrome.runtime.sendMessage({status: "?"},function(response){
    console.log(response)
    if (response.status == "on"){
        //this interval sets the 100ms timing.
        var existCondition = setInterval(function() {
            if (document.querySelector('#toast-container')) {
               console.log("Exists!");
               let a =  document.querySelector('#toast-container')
               a.children[0].remove()
               clearInterval(existCondition);
               
            //    doTheRestOfTheStuff(parameters);
            }
           }, 100);

           //this 100 probably has something to do with the delay.
    }
  })
