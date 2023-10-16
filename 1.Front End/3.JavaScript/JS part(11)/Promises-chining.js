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


//here no need to write multiple catch catch is executes at ones  and stops the saving the data in database.
//according to the callback there bulk lines of code and multiple failure functions. that's why this is best way to write code.
//for all of this functions only single catch statement means if error occured in .then then goes to catch and catch executes.
// saveToDb("Bharath").then(()=>{
//     console.log("This is Bharath data saved...!");
//     saveToDb("Satyanarayana").then(()=>{
//         console.log("This is Satyanarayana data saved");
//             saveToDb("Kavitha").then(()=>{
//             console.log("This is kavitha data saved");
//                 saveToDb("Eshwari").then(()=>{
//                 console.log("This is Eshwari data saved");
//                    saveToDb("Kamalamma").then(()=>{
//                     console.log("This is Kamalamma data saved");
//               })
//             })
//         })
//     })
// })
// .catch("The data is not saved.")


//the above form is also looking like nested then code is not  more understand easy.
//that's why below code.the improved version of above.(we can also use above code but below code is much easier :) )
saveToDb("Bharath")
.then(()=>{
  console.log("This is Bharath data saved...!");
  return saveToDb("Satyanarayana");
})
.then(()=>{
   console.log("This is Satyanarayana data saved");
   return saveToDb("Kavitha");
})
.then(()=>{
   console.log("This is Kavitha data saved");
   return saveToDb("Eshwari");
})
.then(()=>{
   console.log("This is Eshwari data saved");
   return saveToDb("Kamalamma");
})
.then(()=>{
   console.log("This is Kamalamma data saved");
})
.catch(()=>{
    console.log("The error is occured");
})