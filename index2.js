const btn=document.querySelector("#btn");



new Promise((resolve,reject)=>{
    
    btn.addEventListener("click", () => {
      console.log("btn is clicked");
      resolve("it is resolved")
    });
    setTimeout(() => {
        reject("it is rejected")
    }, 3000);
    // reject("it is not resolved")
})
.then((r)=>{
    console.log(r);

}).catch((e)=>{
    console.log(e);
})
