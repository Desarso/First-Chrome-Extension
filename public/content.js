


chrome.runtime.onMessage.addListener((msg ,sender, response)=>{
    console.log(msg);
    console.log(response);
    // check every 100ms
    
})

chrome.runtime.sendMessage({status: "?"},function(response){
    console.log(response)
    if (response.status == "on"){
        var existCondition = setInterval(function() {
            if (document.querySelector('#toast-container')) {
               console.log("Exists!");
               let a =  document.querySelector('#toast-container')
               a.children[0].remove()
               clearInterval(existCondition);
               
            //    doTheRestOfTheStuff(parameters);
            }
           }, 100);
    }
  })