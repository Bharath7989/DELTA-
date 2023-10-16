setInterval(() => {
    console.log("Hello world");
}, 3000);
//the above runs multiple times until we  stop.

console.log("The below is for stopping the SetInterval.")
let id=setInterval(() => {
          console.log("Apna College");
       }, 6000);
       console.log(id);
    //    clearInterval(id);-->which stop the execution of the program.