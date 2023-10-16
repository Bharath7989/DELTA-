function saveToDb(data){
    return new Promise (function(resolve,reject){
        let internet=Math.floor(Math.random()*10)+1;
        if(internet>5){
            resolve("Saved in the database");
        }
        else{
            reject("weak  connection");
        }
     });
}

//here the "result" argument is the promise object's result. if true then comes to .then and result is saved.otherwise moves to .catch and gives the error.
saveToDb("Bharath")
.then((result)=>{
  console.log("This is Bharath data saved...!");
      console.log("result:",result)
  return saveToDb("Satyanarayana");
})
.then((result)=>{
    console.log("This is Satyanarayana data saved");
    console.log("result:",result)
   return saveToDb("Kavitha");
})
.then((result)=>{
   console.log("This is Kavitha data saved");
   console.log("result:",result)
   return saveToDb("Eshwari");
})
.then(()=>{
    
   console.log("This is Eshwari data saved");
    console.log("result:",result)
   return saveToDb("Kamalamma");
})
.then((result)=>{
   console.log("This is Kamalamma data saved");
})
.catch((error)=>{
    console.log("The error is occured");
        console.log("error:",error)

})