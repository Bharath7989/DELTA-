
//LET WE ARE GOING TO STORING THE DATA IN DATABASE.
function saveToDb(data,success,failure){
    let internet=Math.floor(Math.random()*10)+1;
    console.log("The internet speed is=",internet)
     if(internet>5){
       success();
     }
     else{
        failure();
     }
}
saveToDb("Bharath",function success(){
   
   console.log("Success: Successfully saved-->1");
   saveToDb("Sathyanarayana",function success(){
    console.log("Success: Successfully saved-->2")
    saveToDb("Kavitha",function success(){
        console.log("Success: Successfully saved-->3");
        saveToDb("Eshwari",function success(){
             console.log("Success: Successfully saved-->4")
             saveToDb("kamalamma",function success(){
                console.log("Success: Successfully saved-->5");
             },
             function failure(){
              console.log("failed: failed");
             }
             )
        },
          function failure(){
          console.log("failed: failed");
        }
        )
    },
    function failure(){
     console.log("failed: failed");
   }
    )
   },
   function failure(){
     console.log("failed: failed");
   }
   )
  },
  function failure(){
   console.log("failed: failed");
 } );