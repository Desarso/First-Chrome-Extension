//here I have a toggle btn ID and I set it to the variable a, which is awful coding wtf Gabe.

a= document.getElementById('toggle-btn-1');

//wtf is the change string here bro...
a.addEventListener('change',function(){
    if (document.getElementById('toggle-btn-1').checked != true){
      //here if the toggle is set to false, I get the randomThings fucking Id, why in the shit....
      // and if there is not children I exit otherwise, I remove the children and send a message
      // to tell the other scripts that status is off. 
      if (document.querySelector('#randomThings').childElementCount == 0) return
        a = document.querySelector('#randomThings');
        a.children[0].remove();
       chrome.runtime.sendMessage({status:"off"},function(response){
         console.log(response)
       })     
          
    }else{ 
      //here I have another exit code that says that if there are children I return and the toggle is then I return
      // otherwise I get create and element of text to indicate that the app is active and once again send
      // a message to update the other scripts.
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


//this bit of script runs at the begging when the app opens to ask the background script what the status of the app is
//if the app is on it will update the html to indicate this fact and send a message to remind everyone. 
chrome.runtime.sendMessage({status: "?"},function(response){
  console.log(response)
  if (response.status == "on"){
    
    //this part of the code updates the html on the popup
    randomThing=document.createElement("div");
    randomThing.innerText= "Portal Light Active"
    holder=document.querySelector('#randomThings')
    holder.appendChild(randomThing)
    document.getElementById('toggle-btn-1').click()

    //this sends and updating message
    chrome.runtime.sendMessage({status:"on"},function(response){
      console.log(response)});
  }
})
