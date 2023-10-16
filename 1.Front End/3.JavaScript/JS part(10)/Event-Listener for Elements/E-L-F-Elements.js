//the result is shown in console screen.

//this is for paragraph
let para=document.querySelector("p");
para.addEventListener("mouseenter",function () {
   console.log("The paragraph was hoverd") 
});
//this is for div.
let div=document.querySelector("div");
div.addEventListener("dblclick",function () {
   console.log("The div box was double clicked") 
});