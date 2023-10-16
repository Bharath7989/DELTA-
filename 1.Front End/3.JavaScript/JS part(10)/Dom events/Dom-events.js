//This is Document object model
//The below line is selecting the element by using the button class.
//THE BELOW IS ONCLICK.
let btn=document.querySelector(".click")
btn.onclick=function(){
    console.log("Button was touched");
}
//OR
function onclick(){
    console.log("Button was done");
}
btn.onclick=onclick;


// THE BELOW IS ONMOUSEENTER.
//when we enter(hover) the button then count start in console screen
let send=document.querySelector(".send")
send.onmouseenter=function(){
    console.log("send successfully....!");
}
