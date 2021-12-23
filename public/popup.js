a= document.getElementById('toggle-btn-1');
a.addEventListener('change',function(){
    if (document.querySelector('#randomThings').childElementCount != 0){
        console.log(stop)
        a = document.querySelector('#randomThings');
        a.children[0].remove()

    }else{ 
    randomThing=document.createElement("div");
    randomThing.innerText= "Portal Light Active"
    holder=document.querySelector('#randomThings')
    holder.appendChild(randomThing)
    }
})
console.log(a.checked)
