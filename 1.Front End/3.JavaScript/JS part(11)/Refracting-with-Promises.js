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

//here we stored  in the variable but  we can  also done this without storing variable as we can see in the below.
// let request=saveToDb("Bharath");
// request.then(()=>{
//     console.log("This is success");
// })
// .catch(()=>{
//     console.log("This is failed");
// })


//here without storing in a variable.
saveToDb("Bharath").then(()=>{
    console.log("This is success-->1");
})
.catch(()=>{
    console.log("The error is occured.");
})