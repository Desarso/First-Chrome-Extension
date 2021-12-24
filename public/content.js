


chrome.runtime.onMessage.addListener((msg ,sender, response)=>{
    console.log(msg);
    if (msg == "on"){
        var existCondition = setInterval(function() {
            if (document.querySelector('#toast-container')) {
               console.log("Exists!");
               let a =  document.querySelector('#toast-container')
               a.children[0].remove()
               clearInterval(existCondition);
               
            //    doTheRestOfTheStuff(parameters);
            }
           }, 100); // check every 100ms
    }
})
