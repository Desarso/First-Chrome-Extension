a= document.getElementById('toggle-btn-1');
a.addEventListener('change',function(){
    if (document.querySelector('#randomThings').childElementCount != 0){
        a = document.querySelector('#randomThings');
        a.children[0].remove();

        
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            console.log(tabs[0].id);
            chrome.tabs.sendMessage(tabs[0].id,{message:"off"})
          });
       
            
          
    }else{ 
    randomThing=document.createElement("div");
    randomThing.innerText= "Portal Light Active"
    holder=document.querySelector('#randomThings')
    holder.appendChild(randomThing)
    console.log("App inactive")
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id,{message:"on"})
      });
    }
})


