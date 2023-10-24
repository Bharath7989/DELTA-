//THIS CONCEPT I.E MODULE.EXPORTS POSSIBLE WHEN THESE BOTH(I.E SEND-FILE.JS,RECIEVE-FILE.JS) FILES ARE IN SAME FOLDER.
let add=require("./send-file");
//here the above line accepts what is export by the send-file.js.
//send-file.js exports 15 so it takes 15.
console.log(add);