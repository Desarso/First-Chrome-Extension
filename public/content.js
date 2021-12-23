

function doIt() {

    sleep(200).then(()=>{
        
        let a =  document.querySelector('#toast-container')
        console.log(a.children[0])
        console.log("hello")
        if (a!=null){
            a.children[0].remove()
        }else{
            sleep(600).then(doIt())
        }
        

    });
   
 
}

if (document.readyState === 'complete') {
  doIt()
}
else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      doIt()
    }
  }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }