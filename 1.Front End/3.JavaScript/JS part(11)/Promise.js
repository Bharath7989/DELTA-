function saveToDb(data){
 return new Promise((resolve,reject)=>{
    let speed=Math.floor(Math.random()*8);
    if(speed>=4){
        resolve("success: resolved");
    }
    else{
        reject("failure: rejected");
    }
 });
}
saveToDb("Bharath")
.then((request)=>{
  console.log("This is Bharath data saved...!");
    console.log(request)  
    return saveToDb("Raviteja");
})
.then((request)=>{
    console.log("This is Raviteja data saved......!");
        console.log(request) 
})
.catch((error)=>{
    console.log("The error is occured");
        console.log(error)

})