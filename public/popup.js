a= document.getElementById('toggle-btn-1');
a.addEventListener('change',function(){
    if (document.getElementById('toggle-btn-1').checked != true){
      if (document.querySelector('#randomThings').childElementCount == 0) return
        a = document.querySelector('#randomThings');
        a.children[0].remove();
       chrome.runtime.sendMessage({status:"off"},function(response){
         console.log(response)
       })     
          
    }else{ 
      if (document.querySelector('#randomThings').childElementCount != 0) return 
    randomThing=document.createElement("div");
    randomThing.innerText= "Portal Light Active"
    holder=document.querySelector('#randomThings')
    holder.appendChild(randomThing)
      chrome.runtime.sendMessage({status:"on"},function(response){
        console.log(response)
      })  
    }
})

chrome.runtime.sendMessage({status: "?"},function(response){
  console.log(response)
  if (response.status == "on"){
    randomThing=document.createElement("div");
    randomThing.innerText= "Portal Light Active"
    holder=document.querySelector('#randomThings')
    holder.appendChild(randomThing)
    document.getElementById('toggle-btn-1').click()
    chrome.runtime.sendMessage({status:"on"},function(response){
      console.log(response)});
  }
})
